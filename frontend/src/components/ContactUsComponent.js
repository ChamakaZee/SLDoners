import React, { Component } from 'react';
import mainImg from "../images/main.JPG";
import aboutImg from "../images/about_us_header.png";
import helpImg from "../images/help.png";

export default class ContactUsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} class="background-color-main">
        <div className="container" class="background-color-main">
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
        </div>
      </div>
    )
  }
}