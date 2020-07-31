import React, { Component } from 'react'
import { Container, Header, Image } from 'semantic-ui-react';

import Pdf from '../Documents/Resume.pdf';
import avatar from '../assets/suri.jpeg';

export default class About extends Component {
    render() {
        return (
            <Container text>
                <Header className='aboutMe' as='h2'>About Me</Header>
                <p className='about-container'>
                In 2017 I moved from Puerto Rico due to Hurricane Maria. because of this I moved to Oregon to start a new life and during that process I made the greatest transition and started stufying software engineering
                </p>
                <p>
                    As a frontend developer I am fascinated by expressing my creativity through beautiful functional apps. I enjoy working in collaborative enviroment and look to join a team to put my skills in planning, implementing, analyzing and problem solving to use.
                </p>
                <p>
                    While I am not coding you can find me cooking delicious meals at home, watchiong The Office for the thousandth time or going on road trips.
                </p>

                <Image className='profile-pic' src={avatar}/>

                <a id='resume' href={Pdf}>Link to my Resume</a>
            </Container>   
        )
    }
}
