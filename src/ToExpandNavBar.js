import React from "react";
import "./NavBar.css";
import { Button, ExpandingButton } from "./CustomNavButton.js";
import { FaPlus } from "react-icons/fa";
export default class ToExpandNavBar extends React.Component {
  render() {
    return (
      <div key="c" className="NavBar">
        <Button
          className="NavBarSmall"
          onMouseEnter={this.props.onMouseEnter}
          clicked={this.props.action}
        >
          +
        </Button>
      </div>
    );
  }
}
