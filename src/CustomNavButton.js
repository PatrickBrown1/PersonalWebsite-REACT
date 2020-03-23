import React from 'react';
import './NavBar.css';

const button = (props) => (
    <button className='NavBar-onebutton' onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;