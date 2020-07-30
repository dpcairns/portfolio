import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import About from './About';
import ProjectsCard from './ProjectsCard';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';

export default class Home extends Component {
    render() {
        return (
           <section>
               <NavigationBar/>
               <Intro/>
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
