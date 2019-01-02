import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textLength: 0
  }

  textLengthHandler = (event) => {
    this.setState({textLength: event.target.value.length});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" onChange={this.textLengthHandler}></input>
          <p>{this.state.textLength} chars</p>
        </header>
      </div>
    );
  }
}

export default App;
