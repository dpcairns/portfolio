import React, { Component } from 'react';
import Typical from 'react-typical';

export default class Intro extends Component {
    render() {
        return (
           <div>
               <h1 className='intro'> Hello, I'm Surelis Segarra</h1>
                <h2 className='steps'>
                    <Typical className='steps'
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
                </h2>
           </div>
        )
    }
}
