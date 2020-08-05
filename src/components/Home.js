import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import About from './About';
import ProjectsCard from './ProjectsCard';
import Intro from './Intro';
import Contact from './Contact';

export default class Home extends Component {
    render() {
        return (
            <section>
                <NavigationBar/>
                
                <Intro/>

                <About/>

                <ProjectsCard/>
                
                <Contact/>
           </section>

        
                
        )
    }
}
