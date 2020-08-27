import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LangSwitcher from "./Components/LangSwitcher";

import { I18nProvider } from "./Components/providers/i18n";
import translate from "./Components/providers/i18n/translate";
import { AppContext } from "./Components/providers/context";

import Home from "./Components/Home";
import ProjectsCard from "./Components/ProjectsCard";
import Contact from "./Components/Contact";
import logo from "./assets/logo.png";

require("dotenv").config();
process.env.CI = false;
function App() {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.siteLang}>
      <div className="app_container">
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
                  <Link to="/projects">{translate("project_nav")}</Link>
                </li>
                <li>
                  <Link to="/contact">{translate("contact_nav")}</Link>
                </li>
                <li>
                  <LangSwitcher />
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectsCard} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </div>
    </I18nProvider>
  );
}

export default App;
