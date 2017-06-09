import React, { Component } from 'react';
import { Button, Input, UtilityInlineGrid } from 'rhinostyle';
import * as AuthActions from '../actions/AuthActions.js';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <div className="login">
        <Input
          type="text"
          onChange={this.handleChange}
          name="username"
          placeholder="username"
        />
        <Input
          type="password"
          onChange={this.handleChange}
          name="password"
          placeholder="password"
        />
        <div className="u-m-t">
          <UtilityInlineGrid size="large" align="right">
            <Button onClick={this.handleSubmit} type="primary">
              Login
            </Button>
          </UtilityInlineGrid>
        </div>
      </div>
    );
  }
}

export default Login;
