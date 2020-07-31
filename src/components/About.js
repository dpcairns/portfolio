import React, { Component } from 'react'
import { Container, Header, Image, Divider } from 'semantic-ui-react';

import Pdf from '../Documents/Resume.pdf';
import avatar from '../assets/suri.jpeg';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header className='about-me' as='h2'>About Me</Header>
                <Container fluid className='about-container'>
                    <p className='paragraph'>
                        My name is Surelis Segarra. In 2017 I moved from Puerto Rico due to Hurricane Maria. Because of this I moved to Oregon to start a new life and during this process I made the greatest transition and started studying software engineering.
                    </p>
                    <p className='paragraph'>
                    As a front end engineer I am fascinated by expressing my cerativity through beautiful functional apps. I enjoy working in collaborative enviroments and look to join a team to put my skills in planning, implementing, analyzing and problem solving to use.
                    </p>
                    <p className='paragraph'>
                        While I am not coding you can find me cooking delicious meals at home, watching The Office for the thousandth time or going on road trips.
                    </p>
                </Container>

                <a id='resume' href={Pdf}>Link to my Resume</a>
            </div>
        )
    }
}
