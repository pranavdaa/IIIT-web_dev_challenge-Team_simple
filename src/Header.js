import React, {PureComponent} from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import ModalComponent from './ModalComponent'
import RegistrationComponents from './RegistrationComponent'

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChangeValue = e => this.setState({value: e.target.value});

  render() {
    return(
        <Navbar inverse collapseOnSelect style={{display:"flex", flexDirection:"row"}}>
          <Navbar.Header >
            <Navbar.Brand className="brand">
              Pranav's Panting Auction
            </Navbar.Brand>
          <Nav style={{display:"flex", flexDirection:"row"}} >
            <NavItem eventKey={1} href="/">Painting-Gallery</NavItem>
            <NavItem eventKey={2} href="/products">Auction</NavItem>
            <NavItem eventKey={3} href="/contact">Contact Us</NavItem>
            <NavItem eventKey={4} href="/about">About-Project</NavItem>
            <NavItem eventKey={5} href="/Upload">Upload</NavItem>
            <NavItem><ModalComponent value={this.state.value} onChangeValue={this.handleChangeValue}/></NavItem>
            <NavItem><RegistrationComponents value={this.state.value} onChangeValue={this.handleChangeValue}/></NavItem>

          </Nav>
        </Navbar.Header>
      </Navbar>
      );
  }
}
