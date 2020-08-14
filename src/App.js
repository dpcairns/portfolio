import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import ProjectsCard from "./Components/ProjectsCard";
// import About from './components/About';
// import Projects from './components/ProjectsCard';
import Contact from "./Components/Contact";
// import Footer from './components/Footer';
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="app-container">
      <Router>
        <nav>
          <div className="logo">
            <Link to="/">
              <img className="logo-img" src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectsCard} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
