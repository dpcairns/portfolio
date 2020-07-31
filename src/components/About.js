import React, { Component } from 'react'
import {  Header, Image } from 'semantic-ui-react';

import Pdf from '../Documents/Resume.pdf';
import profile from '../assets/suri.jpeg';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header className='about-me' as='h2'>About Me</Header>

                <div className='inner-container'>
                    <div className='p-container'>
                        <p className='paragraph'>
                            My name is Surelis Segarra. In 2017 I moved from Puerto Rico due to Hurricane Maria. Because of this I moved to Oregon to start a new life and during this process I made the greatest transition and started studying software engineering.
                        </p>
                        <p className='paragraph'>
                        As a front end engineer I am fascinated by expressing my cerativity through beautiful functional apps. I enjoy working in collaborative enviroments and look to join a team to put my skills in planning, implementing, analyzing and problem solving to use.
                        </p>
                        <p className='paragraph'>
                            While I am not coding you can find me cooking delicious meals at home, watching The Office for the thousandth time or going on road trips.
                        </p>
                    </div>            
                    <div className='img-container'>
                        <Image className='profile-img' src={profile}/>
                    </div>      
                </div>

                <a className='resume' href={Pdf}>Link to my Resume</a>
            </div>
        )
    }
}
