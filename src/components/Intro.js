import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Typical from 'react-typical';


export default class Intro extends Component {
    render() {
        return (
           <Segment>
               <h1> Hi, I'm Surelis Segarra</h1>
                <span>
                    I'm a 
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                        'Web Developer',
                        1000,
                        'painter (wannabe)',
                        1000,
                        'passionate',
                        1000
                        ]}
                    />
                </span>
           </Segment>
        )
    }
}
