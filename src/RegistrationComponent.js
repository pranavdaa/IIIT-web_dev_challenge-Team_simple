import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: ''};
    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit() {
     var name = this.state.name;
     localStorage.setItem('Username',name);
     this.setState({
      modal: !this.state.modal
     });
  }

  handleName() {
    this.props.onSetName(this.state.name);
}

  render() {
    return (
        <div>
        <FontAwesomeIcon onClick={this.toggle} icon="user"/>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Live Bidding Registration</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Username</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
              <div className="form-group col-md-4">
              <label>Email-id:</label>
              <input type="email" value={this.props.email}  className="form-control" />
                </div>
                <div className="form-group col-md-4">
                <label>Password:</label>
                <input type="password" value={this.props.password} className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                  <label>Mobile Number</label>
                  <input type="text" value={this.props.mobnumber} className="form-control" />
                    </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={this.handleSubmit} color="success" className="btn btn-success">Register</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>

    );
  }
}
