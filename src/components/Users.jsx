import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Bucket,
  BucketHeader,
  BucketBody,
} from 'rhinostyle';
import * as AuthActions from '../actions/AuthActions.js';

class Users extends Component {
  state = {};

  renderUser = (item, idx) => {
    return (
      <Link to={`${item._id}`} key={idx}>
        <Bucket className="u-m-b">
          <BucketHeader title={item.info.businessName} />
          <BucketBody>
            {item.info.description}
          </BucketBody>
        </Bucket>
      </Link>
    );
  }

  render() {
    return (
      <div className="login">
        <Button className="u-m-b" block type="primary">
          <Link to="/new">
            Create new user
          </Link>
        </Button>
        {this.props.users ? this.props.users.map(this.renderUser) : null}
      </div>
    );
  }
}

export default Users;
