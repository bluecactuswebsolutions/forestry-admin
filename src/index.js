import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App.jsx';
import User from './components/User.jsx';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/:id" component={User} />
    </div>
  </Router>,
  document.getElementById('root'));
