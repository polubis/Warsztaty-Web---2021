import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";
import TasksList from "../components/TasksList";
import { Tasks } from "../mocks/Tasks";
import { mockApiCall } from "../utils/mockApiCall";
import TaskStatesList from "../components/TasksStatesList";
import { TasksStates } from "../mocks/TasksStates";
import ConfirmationDialog from "../ui/ConfirmationDialog";
import { updateEntityById, filterEntitiesById } from "../utils/crud";
import TaskFormDialog from "../components/TaskFormDialog";

class TodosPage extends React.Component {
  state = {
    loadingTasks: true,
    loadingTaskStates: true,
    tasks: [],
    taskStates: [],
    isDeleteTaskInProgress: false,
    taskToDeleteId: -1,
    isTaskFormDialogOpen: false,
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
    const findNextTaskState = (state, states) => {
      if (states.length === 0) {
        return null;
      }

      if (states.length === 1) {
        return states[0];
      }

      const foundTaskStateIdx = states.findIndex(
        (currState) => currState.id === state.id
      );

      return states[foundTaskStateIdx + 1] ?? states[0];
    };

    const nextTaskState = findNextTaskState(
      task.taskState,
      this.state.taskStates
    );

    if (!nextTaskState) {
      return;
    }

    const nextTasks = updateEntityById(this.state.tasks, {
      ...task,
      taskState: nextTaskState,
    });

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
        tasks: filterEntitiesById(prevState.tasks, prevState.taskToDeleteId),
      }));
    });
  };

  toggleIsTaskFormDialogOpen = () => {
    this.setState((prevState) => ({
      isTaskFormDialogOpen: !prevState.isTaskFormDialogOpen,
    }));
  };

  onTaskFormDialogSuccess = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      isTaskFormDialogOpen: false,
    }));
  };

  render() {
    const {
      loadingTasks,
      tasks,
      loadingTaskStates,
      taskStates,
      isDeleteTaskInProgress,
      taskToDeleteId,
      isTaskFormDialogOpen,
    } = this.state;

    const isDeleteTaskDialogOpen = taskToDeleteId > -1;

    return (
      <>
        {isTaskFormDialogOpen && (
          <TaskFormDialog
            onClose={this.toggleIsTaskFormDialogOpen}
            onSuccess={this.onTaskFormDialogSuccess}
          />
        )}
        <ConfirmationDialog
          open={isDeleteTaskDialogOpen}
          description="This operation cannot be undone."
          loading={isDeleteTaskInProgress}
          title="Are you sure you want to remove task task status ?"
          onClose={this.handleDeleteTaskDialogClose}
          onConfirm={this.handleDeleteTaskDialogConfirm}
        />
        <TasksPageHeader onAddTaskClick={this.toggleIsTaskFormDialogOpen} />
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
