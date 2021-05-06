import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";
import TasksList from "../components/TasksList";

class TodosPage extends React.Component {
  render() {
    return (
      <div>
        {/* <TasksPageHeader />
        <TasksStatesLoader />
        <TasksLoader /> */}

        <TasksList />
      </div>
    );
  }
}

export default TodosPage;
