import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class organNavigation extends Component {

  render() {
    return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h6 class="navbar-brand" target="_blank">
              <img src={logo5} width="100" height="50" alt="#" />
            </h6>
            <h3>Helping Hand Foundation <h5>Donate Your Organ , You Could Save Many Lives</h5></h3>
          
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Donate Organs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/list" className="nav-link">Request Organs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/info" className="nav-link">How Donation Works</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <div><img src={mainImg} alt="organs"/></div>
        </div>
    );
  }
}