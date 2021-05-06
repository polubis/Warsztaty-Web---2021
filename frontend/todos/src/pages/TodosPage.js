import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";

class TodosPage extends React.Component {
  render() {
    return (
      <div>
        <TasksStatesLoader />
        <TasksLoader />
      </div>
    );
  }
}

export default TodosPage;
