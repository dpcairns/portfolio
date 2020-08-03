import React, { Component } from 'react'
// import { I } from 'semantic-ui-react';
import recipe from '../assets/recipe.png';
import chat from '../assets/chat.png';
import twitter from '../assets/twitter-bot.png';
import salud from '../assets/salud.png';
import { Icon } from 'semantic-ui-react';
// import { Header } from 'semantic-ui-react';



export default class ProjectsCard extends Component {
    render() {
        return (
            <>
                {/* <h1>Projects</h1> */}
                <div className='project-body'>
                    <div className='project-post'>
                        <div className='project-img-container'>
                            <img className='project-img' src={chat} alt=''/>
                        </div>
                        <div className='project-info-container'>
                            <div className='project-info'>
                            <span>languages</span>
                            <span>languages</span>
                            </div>
                            <h1 className='project-title'>React Slack Clone</h1>
                            <p className='project-text'>Personally developed a full-stack chat application from front to back with React,
                            Redux, Firebase 5, and Semantic UI React. Allows user to communicate between
                            development teams or groups (channels)</p>
                            <a href='https://github.com/SuriSegarra'className='cta'><Icon name='github' ></Icon></a>
                            <a href='https://github.com/SuriSegarra'className='cta'><Icon name='linkedin' ></Icon></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
