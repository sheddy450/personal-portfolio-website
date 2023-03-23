import React from 'react';
import './index.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Review from './Review';

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <div>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/about'>
                <About/>
              </Route>
              <Route path='/services'>
                <Service/>
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
              <Route path='/portfolio'>
                <Portfolio/>
              </Route>
              <Route path='/reviews'>
                <Review/>
              </Route>
            </Switch>
          </div>
      </div>
      </Router>
  
  );
}

export default App;
