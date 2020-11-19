import React, { Component } from 'react';
import Navigation from './Navigation';
import logo5 from "../images/5.JPG";
import logo from "../images/logo_1.JPG";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h6 class="navbar-brand" target="_blank">
            <img src={logo5} width="100" height="50" alt="#" />
          </h6>
          <h3>Helping Hand Foundation <h5>Donate Your Organ , You Could Save Many Lives</h5></h3>
          <div class="ml-auto">
            <img src={logo} class="rounded float-right" width="100" height="80" alt="#"></img>
          </div>
        </nav>
        <h6>
          <Navigation />
        </h6>
      </div>
    );
  }
}

export default Header;