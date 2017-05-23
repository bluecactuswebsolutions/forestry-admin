import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./logo.png" className="App-logo" alt="logo" />
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
