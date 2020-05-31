import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login'
import SignupComponent from './signup/signup'
import DashboardComponent from './dashboard/dashboard'
import WelcomePage from './welcome/welcome'
import CookiesPage from './welcome/cookies'
import SafetyPage from './welcome/safety'
import PrivacyPage from './welcome/privacy'


const firebase= require('firebase')
require("firebase/firestore")



const routing=(
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
      <Route path='/welcome' component={WelcomePage}></Route>
      <Route path='/cookies' component={CookiesPage}></Route>
      <Route path='/safety' component={SafetyPage}></Route>
      <Route path='/privacy' component={PrivacyPage}></Route>
    </div>
  </Router>
);
ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
