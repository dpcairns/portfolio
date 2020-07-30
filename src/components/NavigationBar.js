import React from 'react';


import logo from '../assets/logo.png';
// import sun from '../assets/sun.png';
// import moon from '../assets/moon.png';
import { Menu, Image, Icon } from 'semantic-ui-react';

const NavigationBar = () => {
    
    return (
        <Menu
        size='large'
        inverted
        fixed='left'
        horizontal>

        <Image src={logo} alt='' style={{ width: 200 }}/>
        </Menu>
    )
}

export default NavigationBar;