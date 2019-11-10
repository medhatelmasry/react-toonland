import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './pages/HomePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToonListPage from './pages/ToonListPage';
import ToonDetailPage from './pages/ToonDetailPage';
import NotFoundPage from './pages/NotFoundPage';

import NavBar from './components/NavBar';

import {Switch} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="container">


      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/list" component={ToonListPage} exact />
          <Route path="/detail/:id" component={ToonDetailPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
