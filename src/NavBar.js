import React from 'react';
import './NavBar.css';
import CustomNavButton from './CustomNavButton.js'

export default class NavBar extends React.Component {
    render() {
        return(
            <div className='NavBar'>
                <CustomNavButton className='NavBar-onebutton'>Link 1</CustomNavButton>
                <CustomNavButton className='NavBar-onebutton'>Link 2</CustomNavButton>
            </div>
        );
    }
}