import React from "react";
import TasksLoader from "../components/TasksLoader";
import TasksStatesLoader from "../components/TasksStatesLoader";
import TasksPageHeader from "../components/TasksPageHeader";
import TasksList from "../components/TasksList";
import { Tasks } from "../mocks/Tasks";

class TodosPage extends React.Component {
  render() {
    return (
      <div>
        {/* <TasksPageHeader />
        <TasksStatesLoader />
        <TasksLoader /> */}

        <TasksList tasks={Tasks} />
      </div>
    );
  }
}

export default TodosPage;
