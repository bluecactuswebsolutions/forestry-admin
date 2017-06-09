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

  handleLogin = (payload) => {
    AuthActions.login(payload)
      .then(() => {
        this.setState({ login: true });
      });
  }

  toggleActive = (active, id) => {
    AuthActions.patchUser(id, active)
      .then(() => {
        this.setState({ patch: true });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./logo.png" className="App-logo" alt="logo" />
        </div>
        {localStorage.getItem('user') ? <Users toggleActive={this.toggleActive} users={this.state.users} /> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
