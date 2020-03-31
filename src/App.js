import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NavBar from'./NavBar.js';
import Background from'./Background.js';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      top: true
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  } 
  componentWillUnmount() { 
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var vh20 = document.documentElement.clientHeight * .13;
    if(window.pageYOffset <= vh20){
      this.setState({top: true});
    }
    else{
      this.setState({top: false});
    }
  }
  
  
  render() {
    return (
      <div className="App" ref="appref" onScroll={this.handleScroll}>
        <NavBar atTop={this.state.top}/>
        <Background/>

        <div >
          <header className="App-header">
            <p className="Title">Patrick Brown's Personal Website!</p>
          </header>
          <div className="App-body">
            <p>Make header first because why not</p>
            <p>Make the header normal for over 50% window size</p>
            <p>Then make it a square button three lines if it's under 50%</p>
            <p>As soon as the screen is not at the top, change navbar to a circle three lines button on right</p>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();