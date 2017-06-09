import React, { Component } from 'react';
import {
  Button,
  Bucket,
  BucketHeader,
  BucketBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSystem,
  Select,
  Textarea,
  UtilityInlineGrid,
} from 'rhinostyle';

class User extends Component {
  state = {};

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    console.log('this state', this.state);
    // AuthActions.login(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./logo.png" className="App-logo" alt="logo" />
        </div>
        <Button onClick={this.handleUploadAvatarClick}>Upload avatar</Button>
        <Input label="Username" name="username" initialValue={this.state.username} onChange={this.handleChange} />
        <Input type="password" label="Password" name="password" initialValue={this.state.password} onChange={this.handleChange} />
        <Input type="password" label="Retype Password" name="password2" initialValue={this.state.password2} onChange={this.handleChange} />
        <Input label="Business Name" name="businessName" initialValue={this.state.businessName} onChange={this.handleChange} />
        <Textarea onChange={this.handleChange} label="Business Description" name="description" rows={3} />
        <div className="row">
          <Input className="col-sm-6" label="Phone" name="phone" initialValue={this.state.phoneNumber} onChange={this.handleChange} />
          <Input className="col-sm-6" label="Email" name="email" initialValue={this.state.emailAddress} onChange={this.handleChange} />
        </div>
        {/*<div className="row">
          <Select className="col-sm-6" onSelect={this.handleSelect} selected={this.state.service} name="service" label="Service" options={selectOpts} />
          <Select className="col-sm-6" onSelect={this.handleSelect} selected={this.state.category} name="category" label="Category" options={selectOpts} />
        </div>*/}
        <div>
          <Input placeholder="ex. 1 King St." initialValue={this.state.street} onChange={this.handleChange} label="Address" name="street" />
          <div className="row row--condensed">
            <div className="col-sm-7">
              <Input className="u-m-b-0" placeholder="ex. Charleston" initialValue={this.state.city} onChange={this.handleChange} label="City" name="city" />
            </div>
            <div className="col-sm-2">
              <Input className="u-m-b-0" placeholder="ex. SC" initialValue={this.state.state} onChange={this.handleChange} label="State" name="state" />
            </div>
            <div className="col-sm-3">
              <Input className="u-m-b-0" placeholder="ex. 29403" initialValue={this.state.zip} onChange={this.handleChange} label="Zip" name="zip" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;