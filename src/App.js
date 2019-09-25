import React, { Component } from "react";
import "./App.css";

import { Char } from "./Char/Char";
import { Validation } from "./Validation/Validation";

class App extends Component {
  state = {
    text: "",
    chars: []
  };

  deleteChar = index => {
    const chars = [...this.state.chars];
    chars.splice(index, 1);

    const text = chars.join("");

    this.setState({
      text,
      chars
    });
  };

  textChanged = event => {
    const text = event.target.value;
    this.setState({
      text,
      chars: text.split("")
    });
  };

  render() {
    const chars = this.state.chars.map((char, index) => (
      <Char char={char} key={index} deleteChar={() => this.deleteChar(index)} />
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
