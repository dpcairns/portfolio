import React, { Component } from "react";
import About from "./About";
import ProjectsCard from "./ProjectsCard";
import Intro from "./Intro";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Intro />

        <About />

        <ProjectsCard />

        <Contact />

        <Footer />
      </section>
    );
  }
}
