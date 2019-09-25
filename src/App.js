import React, { Component } from "react";
import "./App.css";

import { Char } from "./Char/Char";
import { Validation } from "./Validation/Validation";

class App extends Component {
  state = {
    text: ""
  };

  deleteChar = index => {
    const text = this.state.text.split("");

    text.splice(index, 1);

    const newText = text.join("");

    this.setState({
      text: newText
    });
  };

  textChanged = event => {
    const text = event.target.value;
    this.setState({
      text
    });
  };

  render() {
    const chars = this.state.text
      .split("")
      .map((char, index) => (
        <Char
          char={char}
          key={index}
          deleteChar={() => this.deleteChar(index)}
        />
      ));

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.text}
          onChange={this.textChanged}
        />
        <p>Length of input: {this.state.text.length}</p>
        <Validation textLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
