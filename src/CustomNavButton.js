import React from "react";
import "./NavBar.css";

const Button = props => (
  <button className={props.className} onMouseEnter={props.onMouseEnter}>
    {props.children}
  </button>
);

const ExpandingButton = props => (
  <button
    className="NavBar-expandingbutton"
    onMouseLeave={props.onMouseLeave}
    onClick={() => window.open(props.redirect, "_blank")}
  >
    {props.children}
  </button>
);

export { Button, ExpandingButton };
