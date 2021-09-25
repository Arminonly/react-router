import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./Examples/homePage";
import UsersPage from "./Examples/usersPage";
import AboutPage from "./Examples/aboutPage";
import ErrorPage from "./Examples/errorPage";

export default function App(props) {
  const styles = {
    hr: {
      width: "400px",
    },
    li: {
      listStyleType: "none",
    },
  };
  return (
    <Router>
      <div className="App">
        <h1>React Router Example</h1>
        <hr style={styles.hr} />
        <ul style={styles.li}>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/aboutPage">AboutPage</Link>
          </li>
          <li>
            <Link to="/usersPage">UsersPage</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            {" "}
            <HomePage />{" "}
          </Route>
          <Route path="/aboutPage">
            {" "}
            <AboutPage />{" "}
          </Route>
          <Route path="/usersPage">
            {" "}
            <UsersPage />{" "}
          </Route>

          {/* <Route path= '/usersPAge' component={UsersPage}/> */}

          {/* <Route component={ErrorPage}/> */}

          <Route>
            {" "}
            <ErrorPage />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
