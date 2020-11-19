import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collpase navbar-collapse">
          <ul className="nav nav-pills nav-fil">
            <li className="nav-item">
              <Link to="/donate" className="nav-link text-primary">Donate Organs</Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link text-primary">Request Organs</Link>
            </li>
            <li className="nav-item">
              <Link to="/info" className="nav-link text-primary">How Donation Works</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-primary">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;