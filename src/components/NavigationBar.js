import React, { Component } from 'react';


import logo from '../assets/logo.png';
// import sun from '../assets/sun.png';
// import moon from '../assets/moon.png';
import { Menu, Image, Icon } from 'semantic-ui-react';

    
 export default class NavigationBar extends Component {

        render() {
            return (
                <Menu secondary>
                    <Image className='logo' src={logo}/>
                </Menu>
            )
        }
    }
    

