import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";
import TasksList from "../components/TasksList";
import { Tasks } from "../mocks/Tasks";
import { mockApiCall } from "../utils/mockApiCall";
import TaskStatesList from "../components/TasksStatesList";
import { TasksStates } from "../mocks/TasksStates";
import { findNextTaskState } from "../utils/findNextTaskState";
import ConfirmationDialog from "../ui/ConfirmationDialog";

class TodosPage extends React.Component {
  state = {
    loadingTasks: true,
    loadingTaskStates: true,
    tasks: [],
    taskStates: [],
    isDeleteTaskInProgress: false,
    taskToDeleteId: -1,
  };

  componentDidMount() {
    this.loadTasks();
    this.loadTaskStates();
  }

  loadTasks = () => {
    if (!this.state.loadingTasks) {
      this.setState({ loadingTasks: true });
    }

    mockApiCall(Tasks).then((tasks) => {
      this.setState({ loadingTasks: false, tasks });
    });
  };

  loadTaskStates = () => {
    if (!this.state.loadingTaskStates) {
      this.setState({ loadingTaskStates: true });
    }

    mockApiCall(TasksStates).then((taskStates) => {
      this.setState({ loadingTaskStates: false, taskStates });
    });
  };

  handleTaskStateChange = (task) => {
    const nextTaskState = findNextTaskState(
      task.taskState,
      this.state.taskStates
    );

    if (!nextTaskState) {
      return;
    }

    const nextTasks = this.state.tasks.map((currTask) =>
      currTask.id === task.id
        ? {
            ...currTask,
            taskState: nextTaskState,
          }
        : currTask
    );

    this.setState({ tasks: nextTasks });
  };

  handleDeleteTaskDialogOpen = (taskId) => {
    this.setState({ taskToDeleteId: taskId });
  };

  handleDeleteTaskDialogClose = () => {
    this.setState({ taskToDeleteId: -1 });
  };

  handleDeleteTaskDialogConfirm = () => {
    this.setState({ isDeleteTaskInProgress: true });

    mockApiCall().then(() => {
      this.setState((prevState) => ({
        isDeleteTaskInProgress: false,
        taskToDeleteId: -1,
        tasks: prevState.tasks.filter(
          (task) => task.id !== prevState.taskToDeleteId
        ),
      }));
    });
  };

  render() {
    const {
      loadingTasks,
      tasks,
      loadingTaskStates,
      taskStates,
      isDeleteTaskInProgress,
      taskToDeleteId,
    } = this.state;

    const isDeleteTaskDialogOpen = taskToDeleteId > -1;

    return (
      <>
        <ConfirmationDialog
          open={isDeleteTaskDialogOpen}
          description="This operation cannot be undone."
          loading={isDeleteTaskInProgress}
          title="Are you sure you want to remove task task status ?"
          onClose={this.handleDeleteTaskDialogClose}
          onConfirm={this.handleDeleteTaskDialogConfirm}
        />
        <TasksPageHeader />
        {loadingTaskStates ? (
          <TasksStatesLoader />
        ) : (
          <TaskStatesList states={taskStates} />
        )}
        {loadingTasks ? (
          <TasksLoader />
        ) : (
          <TasksList
            tasks={tasks}
            onTaskStateClick={this.handleTaskStateChange}
            onTaskRemoveClick={this.handleDeleteTaskDialogOpen}
          />
        )}
      </>
    );
  }
}

export default TodosPage;
