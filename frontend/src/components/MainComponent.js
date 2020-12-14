import React, { Component, useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./HeaderComponent";
import DonateOrgan from "./DonateComponent";
import HowItWorks from "./InfoComponent";
import ContactUs from "./ContactUsComponent";
import RequestOrgan from "./RequestComponent";
import ViewOrgan from "./ViewComponent";
import CreateUser from "./RegisterComponent";
import Home from "./HomeComponent";

class Main extends Component {
  render() {
    return (
      <ProvideAuth>
        <Router>
          <div className="container background-color-main" style={{ height: '100%', width: '100%', overflow: 'scroll' }}>
            <Header />
            <Switch>
              <Route path="/login"><LoginPage /></Route>
              <Route path="/donate" component={DonateOrgan} />
              <Route path="/info" component={HowItWorks} />
              <Route path="/list" component={RequestOrgan} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/register" component={CreateUser} />
              <Route path="/view/:id" component={ViewOrgan} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Main;