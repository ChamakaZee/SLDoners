import React, { Component } from 'react';
import mainImg from "../images/main.JPG";
import viewImg from "../images/view-organ.jpg";

export default class ViewComponent extends Component {
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

    render() {
        return (
            <div style={{ marginTop: 10 }} class="background-color-main">
                <div className="container" class="background-color-main">
                    <div><img src={mainImg} class="img-fluid" alt="Responsive image" /></div>
                    <br />
                    <form>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Type</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_type} readonly="readonly" onChange={this.onChangeOrganType} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Date</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_date} readonly="readonly" onChange={this.onChangeOrganDate} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Representative</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_representative} readonly="readonly" onChange={this.onChangeOrganRepresentative} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Dieseases</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_diseases} readonly="readonly" onChange={this.onChangeOrganDiseases} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Note</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_note} readonly="readonly" onChange={this.onChangeOrganNote} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Blood</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_blood} readonly="readonly" onChange={this.onChangeOrganBlood} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Organ Contacts</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="text" value={this.state.organ_contact} readonly="readonly" onChange={this.onChangeOrganContact} />
                            </div>
                        </div>
                    </form>
                    <br></br>
                    <div><img src={viewImg} class="img-fluid" alt="Responsive image" width="100%" height="80" /></div>
                </div>
            </div>
        )
    }
}