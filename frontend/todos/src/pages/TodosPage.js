import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";

class TodosPage extends React.Component {
  render() {
    return (
      <div>
        <TasksPageHeader />
        <TasksStatesLoader />
        <TasksLoader />
      </div>
    );
  }
}

export default TodosPage;
