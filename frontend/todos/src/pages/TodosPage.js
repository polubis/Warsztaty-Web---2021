import React from "react";
import TasksLoader from "../components/TasksLoader";

class TodosPage extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <TasksLoader />
      </div>
    );
  }
}

export default TodosPage;
