import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import mainImg from "../images/main.JPG";

const Organ = props => (
    <tr>
        <td>{props.organ.organ_type}</td>
        <td>{props.organ.organ_blood}</td>
        <td>{props.organ.organ_date}</td>
        <td>{props.organ.organ_diseases}</td>
        <td>
            <Link to={"/view/"+props.organ._id}>More Details</Link>
        </td>
    </tr>
)

export default class OrganList extends Component {

    constructor(props) {
        super(props);
        this.state = {organs: []};
        
        this.onChangeOrganType = this.onChangeOrganType.bind(this);
        this.onChangeOrganBlood = this.onChangeOrganBlood.bind(this);
        this.searchOrgan = this.searchOrgan.bind(this);
 
    }

    componentDidMount() {
        axios.get('http://localhost:4000/organs/')
            .then(response => {
                this.setState({ organs: response.data });  
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
    organList() {
        return this.state.organs.map(function(currentOrgan, i){
            return <Organ organ={currentOrgan} key={i} />; 
        })
    }

    searchOrgan(e){
        e.preventDefault();
        const filteredOrgans = this.state.organs.filter(org => org.organ_type === this.state.organ_type && org.organ_blood === this.state.organ_blood )
        console.log('filr', filteredOrgans)
        this.setState({organs: filteredOrgans})
   
        console.log("search organ list : " + this.state.organs);
        console.log("search organ type : " + this.state.organ_type);
        console.log("search organ blood : " + this.state.organ_blood); 
    }

    onChangeOrganType(e) {
        this.setState({organ_type: e.target.value });      
    }

    onChangeOrganBlood(e) {
        this.setState({organ_blood: e.target.value});
    }

    render() {
        return (
            <div style={{marginTop: 10}} class ="background-color-main">
            <div className="container">
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

                <form onSubmit={this.searchOrgan}>
                <div class="row">
                    <div class="col-5">
                        <select id="organ_type"
                                        class="custom-select"  
                                        value={this.state.organ_type}
                                        onChange={this.onChangeOrganType}>
                            <option value="ERROR">select organ ...</option> 
                            <option value="Liver">Liver</option> 
                            <option value="Heart">Heart</option> 
                            <option value="Lung">Lung</option> 
                            <option value="Kidney">Kidney</option> 
                            <option value="Intestine">Intestine</option> 
                            <option value="Pancreas">Pancreas</option>
                        </select>
                    </div>
                    <div class="col-5">
                        <select id="organ_blood"
                                        class="custom-select" 
                                        value={this.state.organ_blood} 
                                        onChange={this.onChangeOrganBlood}>
                            <option value="ERROR">select blood type ...</option> 
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
                    <div class="col-2">
                        <button type="submit" class="btn btn-primary mb-2">SEARCH</button>
                    </div>
                </div>
               

                <br></br>
                <h5>Current Organ List</h5>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Organ Type</th>
                            <th>Blood Type</th>
                            <th>Available Date</th>
                            <th>Donar Deseases</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.organList() }
                    </tbody>
                </table>
                </form>
            </div>
            </div>
        )
    }
}