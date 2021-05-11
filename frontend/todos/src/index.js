import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TodosPage from "./pages/TodosPage";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/todos" component={TodosPage} />
          <Route path="*" exact render={() => <div>Not found</div>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
