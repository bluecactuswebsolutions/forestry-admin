import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSystem,
} from 'rhinostyle';
import AvatarEditor from 'react-avatar-editor';
import * as AuthActions from '../actions/AuthActions.js';

class AvatarUpload extends Component {
  static displayName = 'Upload Avatar Modal';

  state = {
    scale: 50,
    disableSave: true,
  };

  selectImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    const filename = file ? file.name : null;

    reader.addEventListener('load', () => {
      this.setState({
        avatar: reader.result,
        disableSave: false,
        filename,
      });
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleZoom = (event) => {
    const scale = event.target.value;

    this.setState({ scale });
  }

  handleSave = () => {
    const croppedImg = this.editor.getImageScaledToCanvas().toDataURL();

    AuthActions.uploadAvatar(croppedImg)
      .then(ModalSystem.removeModal);
  }

  render() {
    return (
      <Modal size="sm">
        <ModalHeader title="Profile Photo" />
        <ModalBody>
          <div className="avatar-editor">
            <div>
              <input className="avatar-editor__input" type="file" name="js-upload-avatar" id="js-upload-avatar" accept="image/*" onChange={this.selectImage} />
              <div className="avatar-editor__container">
                <AvatarEditor ref={(editor) => { this.editor = editor; }} scale={parseInt(this.state.scale, 10) / 10} border={1} color={[0, 0, 0, 0]} image={this.state.avatar} onLoadSuccess={this.dragDropImage} />
                <label className="avatar-editor__container__upload" htmlFor="js-upload-avatar">Upload Photo</label>
              </div>
              <input type="range" onChange={this.handleZoom} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button disabled={this.state.disableSave} type="primary" onClick={this.handleSave}>Done</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AvatarUpload;
