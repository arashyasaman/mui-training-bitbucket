import React from 'react';
import './App.css';
import Homepage from './Home';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;