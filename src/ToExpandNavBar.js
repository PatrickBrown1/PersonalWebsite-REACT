import React from 'react';
import './NavBar.css';
import {Button, ExpandingButton}  from './CustomNavButton.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default class ToExpandNavBar extends React.Component {
    render() {
        return(
            <div key="c" className='NavBar'>
                <Button clicked={this.props.action}>
                    Expand
                </Button>
            </div>
        );
    }
}
