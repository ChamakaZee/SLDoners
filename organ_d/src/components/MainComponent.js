import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Contact from './ContactUsComponent';
import Header from './HeaderComponent';
//import Footer from './FooterComponent';
import { Switch,Route,Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

    const HomePage = () => {return(<Home/>);}
    const AboutUsPage = () => {return(<About/>);}
    const ContactUsPage = () => {return(<Contact/>);}

    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={AboutUsPage} />
              <Route path='/contactus' component={ContactUsPage} />
              <Redirect to="/home" />
          </Switch>
      </div>
    );
  }
}

export default Main;