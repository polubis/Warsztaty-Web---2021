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

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
