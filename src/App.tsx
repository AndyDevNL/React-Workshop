import React, { Component } from "react";
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import config from './components/firebaseConfig';

import Navbar from "./components/navigation/navbar";
import Home from "./components/home";
import assignmentOne from "./components/assignmentOne";
import assignmentTwo from "./components/assignmentTwo";
import assignmentThree from "./components/assignmentThree";
import assignmentOneContainer from "./containers/assignmentOneContainer";
import assignmentTwoContainer from "./containers/assignmentTwoContainer";
import assignmentThreeContainer from "./containers/assignmentThreeContainer";

import logo from './logo.svg';
import './App.css';
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container pageContent">
          <Switch>
            <Route path="/assignmentOne" component={assignmentOneContainer} />
            <Route path="/assignmentTwo" component={assignmentTwoContainer} />
            <Route path="/assignmentThree" component={assignmentThreeContainer} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
