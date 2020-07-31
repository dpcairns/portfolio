import React, { Component } from 'react';
import Typical from 'react-typical';

export default class Intro extends Component {
    render() {
        return (
           <div>
               <h1 className='intro'> Hello, I'm Surelis Segarra</h1>
                    <Typical className='steps'
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                        'Web Developer',
                        1000,
                        'Creative',
                        1000,
                        'Passionate',
                        1000
                        ]}
                    />
           </div>
        )
    }
}
