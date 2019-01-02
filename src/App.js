import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';

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
          <ValidationComponent text={this.state.text}/>
        </header>
      </div>
    );
  }
}

export default App;
