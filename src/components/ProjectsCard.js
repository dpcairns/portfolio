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
                <h1 className='projects'>Projects</h1>

                {/* project 1 */}
                <div className='project-body'>
                    <div className='project-post'>
                        <div className='project-img-container'>
                            <img className='project-img' src={chat} alt=''/>
                        </div>
                        <div className='project-info-container'>
                            <div className='project-info'>
                            <h2 className='project-title'>React Slack Clone</h2>
                            <span>React | Redux | Firebase | Semantic UI</span>
                            </div>
                            <p className='project-text'>Personally developed a full-stack chat application from front to back with React,
                            Redux, Firebase 5, and Semantic UI React. React Slack Clone allows user to communicate between
                            development teams or groups (channels)</p>
                            <div>
                            <a href='https://github.com/SuriSegarra/Slack-clone'className='cta'><Icon name='github' ></Icon></a>
                            <a href='https://react-slack-622cb.web.app/login'className='cta'><Icon name='linkify' ></Icon></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* project 2 */}
                <div className='project-body'>
                    <div className='project-post'>
                        <div className='project-img-container'>
                            <img className='project-img' src={recipe} alt=''/>
                        </div>
                        <div className='project-info-container'>
                            <div className='project-info'>
                            <h2 className='project-title'>Just A Recipe</h2>
                            <span>ReactJS | Node | Express | HTML | CSS | MongoDB | Mongoose | Firebase | Spoonacular API</span>
                            </div>
                            <p className='project-text'>In one week sprint my team I created a full stack website that uses React, NodeJS, Firebase, CSS3 and Spoonacular API to build a recipe site with over 350,000 recipes available for the user. The recipes are able to be called based on name, allergens and dietary.)</p>
                            <div>
                            <a href='https://github.com/Just-A-Recipe'className='cta'><Icon name='github' ></Icon></a>
                            <a href='https://justarecipe.netlify.app/'className='cta'><Icon name='linkify' ></Icon></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* project 3 */}
                <div className='project-body'>
                    <div className='project-post'>
                        <div className='project-img-container'>
                            <img className='project-img' src={twitter} alt=''/>
                        </div>
                        <div className='project-info-container'>
                            <div className='project-info'>
                            <h2 className='project-title'>Let's Talk About it</h2>
                            <span>Web App</span>
                            <span>ReactJS | Node | Express | HTML | CSS | MongoDB | Mongoose</span>
                            </div>
                            <p className='project-text'>My team and I created a bot for the alchemy code lab community in one week sprint. Let's Talk About It its A backend twitter bot that that helps stop the stigma of mental health by sharing facts and questions to help spark conversation and reflection. It scrapes data about mental health from research papers and websites and then it sends automated tweets for approval via email weekly to the developers team.</p>
                            <div>
                            <a href='https://github.com/mental-health-twitterbot'className='cta'><Icon name='github' ></Icon></a>
                            <a href='https://letstalkabout-react.herokuapp.com/'className='cta'><Icon name='linkify' ></Icon></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className='project-body'>
                    <div className='project-post'>
                        <div className='project-img-container'>
                            <img className='project-img' src={salud} alt=''/>
                        </div>
                        <div className='project-info-container'>
                            <div className='project-info'>
                            <h2 className='project-title'>Salud!</h2>
                            <span>React | Node | Cocktail DB API | CSS</span>
                            </div>
                            <p className='project-text'>Created a full stack app in one week sprint using ReactJS and NodeJS.  Salud! is a simple, easy to use app that uses the Cocktail DB API  to get access to over 500+  best and latest cocktail recipes. The cocktails are available to be called based on name.</p>
                            <div>
                            <a href='https://github.com/Salud-alchemy'className='cta'><Icon name='github' ></Icon></a>
                            <a href='https://intense-woodland-75694.herokuapp.com/login'className='cta'><Icon name='linkify' ></Icon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
