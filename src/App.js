import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    textLength: 0
  };

  textChanged = event => {
    const text = event.target.value;
    this.setState({
      text,
      textLength: text.length
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
      </div>
    );
  }
}

export default App;
