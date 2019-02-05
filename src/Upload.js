import React, { Component } from "react";
const axios = require("axios");
export default class Upload extends Component {
  constructor(props) {
        super(props);
        this.state ={
            file: null,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
  }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
          <div>
          <label>
         Painting-Name:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <label>
      Base-Price:
      <input type="number" value={this.props.value} />
    </label>
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />

                <button type="submit">Submit</button>
            </form>
</div>
        )
    }
}
