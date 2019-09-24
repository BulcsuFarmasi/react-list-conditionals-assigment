import React, { Component } from "react";
import "./App.css";

import { Char } from "./Char/Char";
import { Validation } from "./Validation/Validation";

class App extends Component {
  state = {
    text: "",
    textLength: 0,
    chars: []
  };

  deleteChar = index => {
    const chars = [...this.state.chars];
    chars.splice(index, 1);

    const text = chars.join("");

    this.setState({
      text,
      textLength: text.length,
      chars
    });
  };

  textChanged = event => {
    const text = event.target.value;
    this.setState({
      text,
      textLength: text.length,
      chars: text.split("")
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.text}
          onChange={this.textChanged}
        />
        <p>Length of input: {this.state.textLength}</p>
        <Validation textLength={this.state.textLength} />
        {this.state.chars.map((char, index) => (
          <Char char={char} deleteChar={() => this.deleteChar(index)} />
        ))}
      </div>
    );
  }
}

export default App;
