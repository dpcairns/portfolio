import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/ProjectsCard';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
    <Router>
      <Route exact path='/' component={Home}/>
    </Router>
    </div>
  );
}

export default App;
