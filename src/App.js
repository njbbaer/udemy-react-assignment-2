import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: "Hello"
  }

  textHandler = (event) => {
    this.setState({text: event.target.value});
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.text.split("")];
    chars.splice(index, 1);
    this.setState({text: chars.join("")});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" onChange={this.textHandler} value={this.state.text}></input>
          <p>{this.state.text.length} chars</p>
          <ValidationComponent text={this.state.text} />
          <div>
            {this.state.text.split("").map((char, index) => {
              return <CharComponent char={char} delete={() => this.deleteCharHandler(index)} />
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
