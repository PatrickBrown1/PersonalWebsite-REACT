import React from 'react';
import './NavBar.css';

const Button = (props) => (
    <button className='NavBar-onebutton' onClick={props.clicked}>
        {props.children}
    </button>
);

const ExpandingButton = (props) => (
    <button className='NavBar-expandingbutton' onClick={props.clicked}>
        {props.children}
    </button>
);

export {
    Button,
    ExpandingButton,
}