import React, { Component } from 'react';
import axios from 'axios';
import mainImg from "../images/main.JPG";

export default class DonateComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeOrganType = this.onChangeOrganType.bind(this);
        this.onChangeOrganDate = this.onChangeOrganDate.bind(this);
        this.onChangeOrganRepresentative = this.onChangeOrganRepresentative.bind(this);
        this.onChangeOrganDiseases = this.onChangeOrganDiseases.bind(this);
        this.onChangeOrganNote = this.onChangeOrganNote.bind(this);
        this.onChangeOrganBlood = this.onChangeOrganBlood.bind(this);
        this.onChangeOrganContact = this.onChangeOrganContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            organ_type: '',
            organ_date: '',
            organ_representative: '',
            organ_diseases: '',
            organ_note: '',
            organ_blood: '',
            organ_contact: ''
        }
    }

    onChangeOrganType(e) {
        this.setState({ organ_type: e.target.value });
    }

    onChangeOrganDate(e) {
        this.setState({ organ_date: e.target.value });
    }

    onChangeOrganRepresentative(e) {
        this.setState({ organ_representative: e.target.value });
    }

    onChangeOrganDiseases(e) {
        this.setState({ organ_diseases: e.target.value });
    }

    onChangeOrganNote(e) {
        this.setState({ organ_note: e.target.value });
    }

    onChangeOrganContact(e) {
        this.setState({ organ_contact: e.target.value });
    }

    onChangeOrganBlood(e) {
        this.setState({ organ_blood: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Organ Type: ${this.state.organ_type}`);
        console.log(`Organ Date: ${this.state.onChangeOrganDate}`);
        console.log(`Organ Representative: ${this.state.organ_representative}`);
        console.log(`Organ Rep. Contacts: ${this.state.organ_contact}`);
        console.log(`Organ Diseases: ${this.state.organ_diseases}`);
        console.log(`Organ Note: ${this.state.organ_note}`);
        console.log(`Organ Blood: ${this.state.organ_blood}`);
        if (this.handleValidation()) {
            const newOrgan = {
                organ_type: this.state.organ_type,
                organ_date: this.state.organ_date,
                organ_representative: this.state.organ_representative,
                organ_contact: this.state.organ_contact,
                organ_diseases: this.state.organ_diseases,
                organ_note: this.state.organ_note,
                organ_blood: this.state.organ_blood
            };

            axios.post('http://localhost:4000/organs/add', newOrgan)
                .then(res => console.log(res.data));

            this.setState({
                organ_agreed: '',
                organ_date: '',
                organ_representative: '',
                organ_contact: '',
                organ_diseases: '',
                organ_note: '',
                organ_blood: '',
                errors: {}
            })
            alert("Organ Detail Saved Succesfully");
        } else {
            alert("You should fill the mandatory fields");
        }
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        //Name
        if (!this.state.organ_representative) {
            formIsValid = false;
            errors["nominee_name"] = "Cannot be Empty";
        }

        if (!this.state.organ_type) {
            formIsValid = false;
            errors["organ_type"] = "Cannot be Empty";
        }

        if (!this.state.organ_blood) {
            formIsValid = false;
            errors["organ_blood"] = "Cannot be Empty";
        }

        if (typeof this.state.organ_representative !== "undefined") {
            if (!this.state.organ_representative.match(/^[a-zA-Z\s]*$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }
        // contact
        if (!this.state.organ_contact) {
            formIsValid = false;
            errors["nominee_contact"] = "Cannot be Empty";
        }

        // deseasas
        if (!this.state.organ_diseases) {
            formIsValid = false;
            errors["donar_diseases"] = "Can not be Empty , No-Deseasas : please menctioned ";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }


    render() {
        return (
            <div style={{ marginTop: 10 }} class="background-color-main">
                <div className="container background-color-main full-height">
                    <div><img src={mainImg} class="img-fluid" alt="Responsive image" /></div>
                    <br></br>
                    <h6>Oragan Donations - Please fill and submit the following details </h6>
                    <p></p>

                    <div class="alert alert-danger alert-dismissible fade show" role="alert" ref="validationAlert">
                        <strong>Information Requires !</strong> You should fill the mandatory fields
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group form-group required">
                            <label class="control-label">Oragan Type </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button">Choose...</button>
                                </div>
                                <select id="organ_type"
                                    class="custom-select"
                                    value={this.state.organ_type}
                                    onChange={this.onChangeOrganType}>
                                    <option value="ERROR">select one ...</option>
                                    <option value="Liver">Liver</option>
                                    <option value="Heart">Heart</option>
                                    <option value="Lung">Lung</option>
                                    <option value="Kidney">Kidney</option>
                                    <option value="Intestine">Intestine</option>
                                    <option value="Pancreas">Pancreas</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group form-group required">
                            <label class="control-label">When You Like to Donate </label>
                            <input
                                type="date"
                                dateformat="DD-MM-YYYY"
                                min={new Date()}
                                className="form-control"
                                value={this.state.organ_date}
                                onChange={this.onChangeOrganDate}
                            />
                        </div>
                        <div className="form-group form-group required">
                            <label class="control-label">Blood Type </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button">Choose...</button>
                                </div>
                                <select id="organ_blood"
                                    class="custom-select"
                                    value={this.state.organ_blood}
                                    onChange={this.onChangeOrganBlood}>
                                    <option value="ERROR">select one ...</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group form-group required">
                            <label class="control-label">Nominate a Representative</label>
                            <input id="nominee_name"
                                type="text"
                                className="form-control"
                                value={this.state.organ_representative}
                                onChange={this.onChangeOrganRepresentative}
                            />
                        </div>
                        <div className="form-group form-group required ">
                            <label class="control-label">Nominee Contact </label>
                            <input id="nominee_contact"
                                type="text"
                                className="form-control"
                                value={this.state.organ_contact}
                                onChange={this.onChangeOrganContact}
                            //placeholder="Eg: +9411 234 355"
                            />
                        </div>
                        <div className="form-group form-group required">
                            <label class="control-label">Diseases in Last 3 Years </label>
                            <input id="donar_diseases"
                                type="text"
                                className="form-control"
                                value={this.state.organ_diseases}
                                onChange={this.onChangeOrganDiseases}
                            //placeholder="Eg: No Dieseases \ covid-19 \ etc"
                            />
                        </div>
                        <div className="form-group">
                            <label>Note  </label>
                            <textarea
                                type="textarea"
                                rows={3}
                                className="form-control"
                                value={this.state.organ_note}
                                onChange={this.onChangeOrganNote}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Donate Organ" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}