import React from 'react';
import './NavBar.css';

const Button = (props) => (
    <button className='NavBar-onebutton' onClick={props.clicked}>
        {props.children}
    </button>
);

const ExpandingButton = (props) => (
    <button className='NavBar-expandingbutton' 
            onClick={ () => window.open(props.redirect, "_blank") }>
        {props.children}
    </button>
);

export {
    Button,
    ExpandingButton,
}