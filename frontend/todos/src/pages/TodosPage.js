import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";
import TasksList from "../components/TasksList";
import { Tasks } from "../mocks/Tasks";
import { mockApiCall } from "../utils/mockApiCall";

class TodosPage extends React.Component {
  state = {
    loading: true,
    tasks: [],
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }

    mockApiCall(Tasks).then((tasks) => {
      this.setState({ loading: false, tasks });
    });
  };

  render() {
    const { loading, tasks } = this.state;

    return (
      <div>
        <TasksPageHeader />

        {/* <TasksPageHeader />
        <TasksStatesLoader />
        */}

        {loading ? <TasksLoader /> : <TasksList tasks={tasks} />}
      </div>
    );
  }
}

export default TodosPage;
