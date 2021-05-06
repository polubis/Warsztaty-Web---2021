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
  };

  componentDidMount() {
    mockApiCall(Tasks).then((tasks) => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <TasksPageHeader />

        {/* <TasksPageHeader />
        <TasksStatesLoader />
        */}

        {loading ? <TasksLoader /> : <TasksList tasks={Tasks} />}
      </div>
    );
  }
}

export default TodosPage;
