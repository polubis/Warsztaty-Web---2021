import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Text from "./Text";

const PercentageText = (props) => {
  return props.value <= 0 ? null : (
    <span className={`percentage-text-${props.value > 100 ? "red" : "green"}`}>
      {props.value} %
    </span>
  );
};

class UsersList extends React.Component {
  state = {
    users: [
      { id: 0, name: "Piotr" },
      { id: 1, name: "Piotr2" },
      { id: 2, name: "Piotr3" },
    ],
  };

  addUser = () => {
    this.setState((prevState) => ({
      users: [
        ...prevState.users,
        { id: prevState.users.length + 1, name: "Piotr4" },
      ],
    }));
  };

  render() {
    return (
      <ul onClick={this.addUser}>
        {this.state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersList />
        <PercentageText value={15} />
        <PercentageText value={0} />
        <PercentageText value={101} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text>
          You are about to <span>unban</span> polubis
        </Text>
      </header>
    </div>
  );
}

export default App;
