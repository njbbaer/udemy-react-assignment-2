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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" onChange={this.textHandler} value={this.state.text}></input>
          <p>{this.state.text.length} chars</p>
          <ValidationComponent text={this.state.text} />
          <div>
            {this.state.text.split("").map((char) => {
              return <CharComponent char={char} />
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
