import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DonateOrgan from "./components/donate-organ.component";
import ListOrgan from "./components/list-organ.component";
import InfoOrgans from "./components/Info-organ.component";
import InfoOrgan from "./components/view-organ.component";
import ContactOrgan from "./components/contact-organ.component";
import CreateUser from "./components/create-organuser.component";
import Login from "./components/login-organ.component";

import logo5 from "./images/5.JPG";
import logo from "./images/logo_1.JPG";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="container background-color-main" style={{ height: '100%', width: '100%', overflow: 'scroll'}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h6 class="navbar-brand" target="_blank">
              <img src={logo5} width="100" height="50" alt="#" />
            </h6>
            <h3>Helping Hand Foundation <h5>Donate Your Organ , You Could Save Many Lives</h5></h3>
            <div class="ml-auto">
              <img src={logo} class="rounded float-right" width="100" height="80" alt="#"></img>
            </div>
          </nav>
         
          <Switch>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/donate" component={DonateOrgan} />
            <Route path="/list" component={ListOrgan} />
            <Route path="/info" component={InfoOrgans} />
            <Route path="/view/:id" component={InfoOrgan} />
            <Route path="/contact" component={ContactOrgan} />
            <Route path="/new-user" component={CreateUser} />
            <Route path="/"  component={Login} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
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

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p> Welcome!{" "}
      <button onClick={() => {auth.signout(() => history.push("/"));}}>
        Sign out
      </button>
    </p> ) : (
    <p>You are not logged in</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
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
