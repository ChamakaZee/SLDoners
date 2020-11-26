import React, { Component } from 'react';
import mainImg from "../images/main.JPG";
import donateImg from "../images/one-organ-donor-eight-lives.jpg";
import helpImg from "../images/help.png";

export default class InfoComponent extends Component {
    render() {
        return (
            <div style={{ marginTop: 10 }} class="background-color-main">
                <div className="container" class="background-color-main">
                    <div><img src={mainImg} class="img-fluid" alt="Responsive image" /></div>
                    <br></br>
                    <h6>Registering as a Donor</h6>
                    <p>The process of donation most often begins with your consent to be a donor by registering in your state. Signing up does not guarantee you will be able to donate your organs, eyes, or tissues—and registering usually takes place many years before donation becomes possible. But it is the first step to being eligible to save lives.</p>
                    <div class="text-center"><img src={donateImg} class="img-fluid" alt="Responsive image" /></div>
                    <p></p>
                    <h6>Medical Care of Potential Donors</h6>
                    <p>For someone to become a deceased donor, he or she has to die in very specific circumstances. Most often, a patient comes to a hospital because of illness or accident, such as a severe head trauma, a brain aneurysm or stroke.</p>
                    <p>The patient is put on artificial or mechanical support, which keeps blood with oxygen flowing to the organs. The medical team does everything possible to save the patient's life. At this point, whether or not the person is a registered donor is not considered.</p>
                    <p></p>
                    <h6>The Matching Process</h6>
                    <p>If the deceased person's evaluation allows donation, the OPO contacts the Organ Procurement and Transplantation Network (OPTN).</p>
                    <p>The OPTN operates the national database of all patients in the Srilanka waiting for a transplant. The OPO enters information about the deceased donor into the computer system and the search begins.</p>
                    <p>The computer system generates a list of patients who match the donor (by organ). Each available organ is offered to the transplant team of the best-matched patient.</p>
                    <p>The transplant surgeon determines whether the organ is medically suitable for that patient or may refuse the organ—for example, if the patient is too sick to be transplanted or cannot be reached in time.</p>
                    <p>Most organs go to patients in the area where the organs were recovered. The others are shared with patients in other regions of the country</p>

                    <p></p>
                    <h6>‌Transplanting the Organs</h6>
                    <p>The transplant operation takes place after the transport team arrives at the hospital with the new organ. The transplant recipient is typically waiting at the hospital and may already be in the operating room awaiting the arrival of the lifesaving organ.</p>
                    <p>Surgical teams work around the clock as needed to transplant the new organs into the waiting recipients.</p>
                    <div class="text-center"><img src={helpImg} class="img-fluid" alt="Responsive image" /></div>
                </div>
            </div>
        )
    }
}