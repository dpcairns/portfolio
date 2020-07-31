import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import recipe from '../assets/recipe.png';



export default class ProjectsCard extends Component {
    render() {
        return (
            <div className='card middle'>
                <div className='front'>
                    <img src={recipe} alt=''/>
                </div>
                <div className='back'>
                    <div className='back-content middle'>
                      <h2>Back</h2>
                      <span>languages used</span>   
                      <div className='icons'>
                           <a href='#'><Icon name='github square'/></a>
                           <a href='#'><Icon name='linkify'/></a>
                           <a href='#'><Icon name='linkedin square'/></a>
                           <a href='#'><Icon name='twitter square'/></a>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}
