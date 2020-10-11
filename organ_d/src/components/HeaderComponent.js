import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Container,Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);//to get the functions is the same function
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark color="danger" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              SLDonors
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
                </NavItem>
              </Nav>
              <Nav className='ml-auto nav-link' navbar>
              <NavItem>
              <NavLink className="nav-link" to="/login">
                    <span className="fa fa-sign-in fa-lg"></span>Login
              </NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Container>
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div className="col-12 col-sm-6">
                  <h1>Yes I,M A DONOR</h1>
                  <p>Let's Save An Another Life</p>
                </div>
              </div>
            </div>
          </Jumbotron>
        </Container>
      </React.Fragment>
    );
  }
}

export default Header;