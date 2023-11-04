import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: "",
    };
  }

  handleInput = (value) => {
    this.setState({ input: this.state.input + value });
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  calculateResult = () => {
    try {
      this.setState({ result: eval(this.state.input) });
    } catch (e) {
      this.setState({ result: "Error" });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="input">{this.state.input}</div>
        <div className="result">{this.state.result}</div>
        <div className="buttons">
          <button onClick={() => this.handleInput("7")}>7</button>
          <button onClick={() => this.handleInput("8")}>8</button>
          <button onClick={() => this.handleInput("9")}>9</button>
          <button onClick={() => this.handleInput("+")}>+</button>
          <button onClick={() => this.handleInput("4")}>4</button>
          <button onClick={() => this.handleInput("5")}>5</button>
          <button onClick={() => this.handleInput("6")}>6</button>
          <button onClick={() => this.handleInput("-")}>-</button>
          <button onClick={() => this.handleInput("1")}>1</button>
          <button onClick={() => this.handleInput("2")}>2</button>
          <button onClick={() => this.handleInput("3")}>3</button>
          <button onClick={() => this.handleInput("*")}>*</button>
          <button onClick={() => this.clearInput()}>C</button>
          <button onClick={() => this.handleInput("0")}>0</button>
          <button onClick={() => this.calculateResult()}>=</button>
          <button onClick={() => this.handleInput("/")}>/</button>
        </div>
      </div>
    );
  }
}

export default App;
