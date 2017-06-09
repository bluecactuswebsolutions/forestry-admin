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
        <Bucket className="u-m-b">
          <BucketHeader className="u-flex-justify-between" title={item.info.businessName}>
            {!item.active ? <Button onClick={() => this.props.toggleActive(true, item._id)} type="primary">Activate</Button> : <Button onClick={() => this.props.toggleActive(false, item._id)} type="danger">Deactivate</Button>}
          </BucketHeader>
          <BucketBody>
            <Link to={`${item._id}`} key={idx}>
              {item.info.description}
            </Link>
          </BucketBody>
        </Bucket>
    );
  }

  render() {
    return (
      <div className="login">
        <Link className="u-text-white" to="/new">
          <Button className="u-m-b" block type="primary">
            Create new user
          </Button>
        </Link>
        {this.props.users ? this.props.users.map(this.renderUser) : null}
      </div>
    );
  }
}

export default Users;
