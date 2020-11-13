import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { Map, GoogleApiWrapper } from 'google-maps-react';

import mainImg from "../images/main.JPG";
import aboutImg from "../images/about_us_header.png";
import helpImg from "../images/help.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} class="background-color-main">
        <div className="container" class="background-color-main">
          <h6>
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
          </h6>
          <div><img src={mainImg} class="img-fluid" alt="Responsive image" /></div>
          <br></br>
          <h6>About ...</h6>
          <p>
            The Division of Transplantation (DoT) is within the Department of Health and Human Services, Health Resources and Services Administration's Healthcare Systems Bureau (HSB). DoT is the primary federal entity responsible for oversight of the nation’s organ and blood stem cell transplant systems and for initiatives to increase organ and blood stem cell donations in the Srilanka
                        <div class="text-center"><img src={aboutImg} class="img-fluid" alt="Responsive image" /></div>
          </p>
          <p></p>
          <h6>Contact Information</h6>
          <p></p>
          <p>The Helping Hand Foundation - Sri Lanka</p>
          <p>180/15 Wajaya Road</p>
          <p>Colombo 7</p>
          <p>Sri Lanka</p>
          <br></br>
          <p>Telephone : 011 222 3456</p>
          <p>Email : helpingHand@support.com</p>
          <p></p>
          <div class="text-center"><img src={helpImg} class="img-fluid" alt="Responsive image" /></div>
          {/* <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                    /> */}
        </div>
      </div>
    )
  }
}