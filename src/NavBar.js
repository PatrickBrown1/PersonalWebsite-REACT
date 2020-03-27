import React from 'react';
import './NavBar.css';
import {Button, ExpandingButton}  from './CustomNavButton.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            atTop: true,
            expandedNav: false
        };
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.updateState();
    }
    handleExpandClick(){
        alert("expand navbar");
        this.setState({expandedNav: true});
    }
    updateState(){
        this.setState({atTop: this.props.atTop});
        if(this.state.atTop = true){
            this.setState({expandedNav: false});
        }
    }
    render() {
        
        return(
            <div>
                {this.state.atTop ? (
                    <div key="a" className='NavBar'>
                        <Button>Link 1</Button>
                        <Button>Link 2</Button>
                        <ExpandingButton
                            redirect="https://github.com/PatrickBrown1">
                            <FaGithub size={32} style={{verticalAlign: 'middle'}}/>
                            &thinsp; GitHub
                        </ExpandingButton>
                        <ExpandingButton
                            redirect="https://www.linkedin.com/in/P-Brown">
                            <FaLinkedin size={32} style={{verticalAlign: 'middle'}}/>
                            &thinsp; LinkedIn
                        </ExpandingButton>
                    </div>
                ) : [
                    this.state.expandedNav ? (
                        <div key="b" className='NavBar'>
                            <Button>Link 9</Button>
                            <Button>Link 2</Button>
                            <ExpandingButton
                                redirect="https://github.com/PatrickBrown1">
                                <FaGithub size={32} style={{verticalAlign: 'middle'}}/>
                                &thinsp; GitHub
                                
                            </ExpandingButton>
                            <ExpandingButton
                                redirect="https://www.linkedin.com/in/P-Brown">
                                <FaLinkedin size={32} style={{verticalAlign: 'middle'}}/>
                                &thinsp; LinkedIn
                            </ExpandingButton>
                        </div>
                    ) : (
                        <div key="c" className='NavBar'>
                            <Button onClick={ () => {this.handleExpandClick()} }>
                                Expand
                            </Button>
                            
                        </div>
                    )
                ]}
            
            </div>
        );
    }
}
