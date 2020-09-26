import React from 'react';
import { Navbar, NavbarBrand, Jumbotron,Container } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar dark color="danger">
            <div className="container">
              <NavbarBrand href="/">SLDonors</NavbarBrand>
            </div>
          </Navbar>
        </div>
      </header>
      <Container>
          <Jumbotron   id="jumbotron" fluid>
            <Container fluid>
              <h1 className="display-3">Yes I'M A DONOR</h1>
              <p className="lead">Let's Give your Hand To Save An Another Life</p>
            </Container>
          </Jumbotron>
          </Container>
    </div>
  );
}

export default App;
