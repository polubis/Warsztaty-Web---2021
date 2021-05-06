import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";
import TasksList from "../components/TasksList";
import { Tasks } from "../mocks/Tasks";
import { mockApiCall } from "../utils/mockApiCall";
import TaskStatesList from "../components/TasksStatesList";
import { TasksStates } from "../mocks/TasksStates";

class TodosPage extends React.Component {
  state = {
    loadingTasks: true,
    loadingTaskStates: true,
    tasks: [],
    taskStates: [],
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

  render() {
    const { loadingTasks, tasks, loadingTaskStates, taskStates } = this.state;

    return (
      <>
        <TasksPageHeader />
        {loadingTaskStates ? (
          <TasksStatesLoader />
        ) : (
          <TaskStatesList states={taskStates} />
        )}
        {loadingTasks ? <TasksLoader /> : <TasksList tasks={tasks} />}
      </>
    );
  }
}

export default TodosPage;
