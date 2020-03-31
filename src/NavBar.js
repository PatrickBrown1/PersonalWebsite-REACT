import React from "react";
import "./NavBar.css";
import { Button, ExpandingButton } from "./CustomNavButton.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ExpandedNavBar from "./ExpandedNavBar.js";
import ToExpandNavBar from "./ToExpandNavBar.js";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atTop: true,
      showExpanded: true,
      hovering: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.updateState();
  }

  updateState() {
    console.log("updateState");
    //if it's at the top, I want expanded to always show
    //
    //if it's NOT at the top, I want expanded to show only
    //           if the button has been pressed

    //if not at top and !show expanded,

    this.setState({ atTop: this.props.atTop });
    if (this.state.atTop == true) {
      this.setState({ showExpanded: true, buttonClicked: false });
    } else if (this.state.atTop == false && this.state.hovering == true) {
      this.setState({ showExpanded: true });
    } else {
      this.setState({ showExpanded: false });
    }
  }
  mouseEnter() {
    this.setState({ hovering: true });
  }
  mouseLeave() {
    this.setState({ hovering: false });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.hovering || this.state.atTop ? (
          <ExpandedNavBar onMouseLeave={this.mouseLeave} />
        ) : (
          <ToExpandNavBar onMouseEnter={this.mouseEnter} />
        )}
      </div>
    );
  }
}
