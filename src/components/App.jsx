import React, { Component } from 'react';
import Login from './Login';
import Users from './Users';
import * as AuthActions from '../actions/AuthActions.js';

class App extends Component {
  state = {
    users: [],
  };

  componentWillMount() {
    AuthActions.fetchUsers()
      .then((data) => {
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./logo.png" className="App-logo" alt="logo" />
        </div>
        {localStorage.getItem('user') ? <Users users={this.state.users} /> : <Login />}
      </div>
    );
  }
}

export default App;
