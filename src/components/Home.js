import React, { Component } from 'react';
import NavBar from './NavBar';
import About from './About';
import ProjectsCard from './ProjectsCard';
import Contact from './Contact';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
           <section>
               <NavBar/>
               <section>
                    <About/>
                    <ProjectsCard/>
                    <Contact/>
                    <Footer/>
               </section>
           </section>
        )
    }
}
