import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import mainImg from "../images/main.JPG";
import viewImg from "../images/view-organ.jpg";


export default class ViewOrgan extends Component {

    constructor(props) {
        super(props);

        this.onChangeOrganType = this.onChangeOrganType.bind(this);
        this.onChangeOrganDate = this.onChangeOrganDate.bind(this);
        this.onChangeOrganRepresentative = this.onChangeOrganRepresentative.bind(this);
        this.onChangeOrganDiseases = this.onChangeOrganDiseases.bind(this);
        this.onChangeOrganNote = this.onChangeOrganNote.bind(this);
        this.onChangeOrganBlood = this.onChangeOrganBlood.bind(this);
        this.onChangeOrganContact = this.onChangeOrganContact.bind(this);

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

    componentDidMount() {
        axios.get('http://localhost:4000/organs/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    organ_type: response.data.organ_type,
                    organ_date: response.data.organ_date,
                    organ_representative: response.data.organ_representative,
                    organ_diseases: response.data.organ_diseases,
                    organ_note: response.data.organ_note,
                    organ_blood: response.data.organ_blood,
                    organ_contact: response.data.organ_contact    
                })   

                console.log(response.data);
            })

            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeOrganType(e) {
        this.setState({organ_type: e.target.value });      
    }

    onChangeOrganDate(e) {
        this.setState({organ_date: e.target.value });
    }

    onChangeOrganRepresentative(e) {
        this.setState({organ_representative: e.target.value});
    }

    onChangeOrganDiseases(e) {
        this.setState({ organ_diseases: e.target.value});
    }

    onChangeOrganNote(e) {
        this.setState({organ_note: e.target.value});
    }

    onChangeOrganContact(e) {
        this.setState({organ_contact: e.target.value});
    }

    onChangeOrganBlood(e) {
        this.setState({organ_blood: e.target.value});
    }
    
    render() {
        return (
        <div style={{marginTop: 10}} class ="background-color-main">
            <div className="container" class ="background-color-main">
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
                <div><img src={mainImg} class="img-fluid" alt="Responsive image"/></div>
                <br></br>
                               
                <form>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Type</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_type} readonly = "readonly" onChange={this.onChangeOrganType}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Date</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_date} readonly = "readonly" onChange={this.onChangeOrganDate}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Representative</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_representative} readonly = "readonly" onChange={this.onChangeOrganRepresentative}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Dieseases</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_diseases} readonly = "readonly" onChange={this.onChangeOrganDiseases}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Note</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_note} readonly = "readonly" onChange={this.onChangeOrganNote}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Blood</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_blood} readonly = "readonly" onChange={this.onChangeOrganBlood}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Organ Contacts</label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" value={this.state.organ_contact} readonly = "readonly" onChange={this.onChangeOrganContact}/>
                        </div>
                    </div>
                </form>
                <br></br>
                <div><img src={viewImg} class="img-fluid" alt="Responsive image"  width="100%" height="80"/></div>
             </div>
            </div>
        )
    }
}
