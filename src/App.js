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
        {this.state.chars.map(char => (
          <Char char={char} />
        ))}
      </div>
    );
  }
}

export default App;
