import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layouts/Navbar';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';
import Awards from './components/sections/Awards';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router>
      <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/Awards' component={Awards}/>
            <Route exact path='/Skills' component={Skills}/>
            <Route exact path='/Portfolio' component={Portfolio}/>
            <Route exact path='/Experience' component={Experience}/>
            <Route exact path='/' component={About}/>
          </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
