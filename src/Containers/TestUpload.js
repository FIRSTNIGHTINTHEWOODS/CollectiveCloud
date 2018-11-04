import React, { Component } from 'react';
import { storage } from '../Storage/firebase'
export default class TestUpload extends Component {

  constructor(props) {
    super(props);
    this.state= {
      file: null
    }
    this.uploadFile = this.uploadFile.bind(this);
    this.chooseFile = this.chooseFile.bind(this);
  }

  chooseFile(e) {
      let file = e.target.files[0];
      this.setState({
        file: file
      });
      console.log(this.progress);
  }

  uploadFile(file) {
      let filePath = storage.ref('files/' + file.name);
      var task = filePath.put(file);
      return new Promise((resolve, reject) =>{
        task.on('state_changed', snapshot => {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.progress.value = percentage;
        },
        err => {
          reject(err);
        },
        complete => {
          console.log(task.snapshot);
          alert('uploaded');
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="progress">
          <progress style={{ width: '100%' }} className="determinate" ref={(progress) => { this.progress = progress; }} value="0" max="100" id="uploader">0%</progress>
        </div>
        <input
          type="file"
          onChange={(e) => this.chooseFile(e)} />
        <input
          type="button"
          value="Upload"
          onClick={() => { this.uploadFile(this.state.file) }}
        />
      </div>
    );
  }
}
