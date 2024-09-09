import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import Uncontrolledform from "./components/Form/uncontrolled";
import Controlledform from "./components/Form/control";
import { Mount } from "./components/mount";
import React from "react";
import Update from "./components/update";
import StockData from "./components/stockdata";
import { FuncCounter } from "./components/funccounter";
import { Counter1 } from "./components/counter1";
import { Uncontrolled1 } from "./components/uncontrolled1";
import { Controlled1 } from "./components/controlled1";
import { Mount1 } from "./components/mount1";
import { Update1 } from "./components/update1";
import { StockData1 } from "./components/stockdata1";
import { FuncCounter2 } from "./components/Funccounter2";
import { Funcounter3 } from "./components/funcounter3";
import { CuriousCat } from "./components/curiouscat";
import { ConditionalRender } from "./components/conditionalrender";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userId: 1, checked: false };
  }
  render() {
    return (
      <div className="App">
        {/* ******counter****** */}
        {/* Counter */}
        {/* <Counter diff={1} />
      <Counter diff={5} /> */}

        {/* ********FuncCounter******** */}
        {/* <FuncCounter /> */}

        {/* <header className="App-header">
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
      </header> */}
        {/* <h1>Form</h1> */}
        {/* *************Counter1********** */}
        {/* <Counter1 diff={1} /> */}

        {/* ******uncontrolled form******** */}
        {/* <Uncontrolledform /> */}
        {/* <Uncontrolled1 /> */}

        {/* ****************controlled form******* */}
        {/* <Controlledform /> */}
        {/* <Controlled1 /> */}

        {/* *********Mount********* */}
        {/* <Mount /> } */}

        {/* <input
          type="number"
          value={this.state.userId}
          onChange={(event) => {
            this.setState({ userId: event.target.value });
          }}
        />
        <Update userId={this.state.userId} /> */}

        {/* **********Mount1********************** */}
        {/* <Mount1 />
        <input
          type="number"
          value={this.state.userId}
          onChange={(event) => {
            this.setState({ userId: event.target.value });
          }}
        />
        <Update userId={this.state.userId} /> */}
        {/* /*************checkbox*************** */}
        {/* <input
          type="checkbox"
          checked={this.state.checked}
          onChange={(e) => {
            this.setState({ checked: e.target.checked });
          }}
        />
        {this.state.checked && <StockData />} */}
        {/* ************checkbox1*************** */}
        {/* <input
          type="checkbox"
          checked={this.state.checked}
          onChange={(event) => {
            this.setState({ checked: event.target.checked });
          }}
        />
        {this.state.checked && <StockData1 />} */}
        {/* <FuncCounter2 name="Counter" diff={1} /> */}
        {/* <Funcounter3 name="Basic counter" diff={1} />
        <Funcounter3 name="Advanced Counter" diff={5} /> */}
        {/* <CuriousCat /> */}
        <ConditionalRender />
      </div>
    );
  }
}

export default App;
