import React from 'react';
import './NavBar.css';
import {Button, ExpandingButton}  from './CustomNavButton.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default class NavBar extends React.Component {
    render() {
        return(
            <div className='NavBar'>
                <Button>Link 1</Button>
                <Button>Link 2</Button>
                <ExpandingButton
                    redirect="https://github.com/PatrickBrown1">
                    <FaGithub size={32}/>
                    &thinsp; GitHub
                </ExpandingButton>
                <ExpandingButton
                    redirect="https://www.linkedin.com/in/P-Brown">
                    <FaLinkedin size={32}/>
                    &thinsp; LinkedIn
                </ExpandingButton>
            </div>
        );
    }
}
