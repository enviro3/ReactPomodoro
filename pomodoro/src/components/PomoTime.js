import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import dateFormat from 'dateformat';

class PomoTime extends Component {
  constructor(props){
    super(props);
    this.state = {timeRemaining: (7), running: false};
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  secondsToFormattedTime(seconds) {
    console.log("this work?")
    var secondsAsDateObject = new Date(seconds * 1000);
    var correctFormat = dateFormat(secondsAsDateObject, "MM:ss");
    return correctFormat;
  }

  tick() {
    console.log ("hey look");
    if (this.state.timeRemaining !== 0){
      this.setState((prevState) => ({timeRemaining: prevState.timeRemaining-1}));
    }
    else {
      clearInterval(this.timerID);
    }
  }

  startTimer(timeRemaining) {
    console.log(this.state.timeRemaining-1);
    this.timerID  = setInterval( () => this.tick(),1000);
    this.setState((prevState) => ({running: true}));

  }

  resetTimer(){
    console.log("RESET!!")
    this.setState((prevState) => ({timeRemaining: 7}));
    this.setState((prevState) => ({running: false}));
    clearInterval(this.timerID);

  }

  render(){
    return (
      <div>
        <div className="PomoTime">
           <li>clock will go here Timer, clock display, button </li>
        </div>
        <button
          id="startButton"
          onClick={ () => this.startTimer()}
          disabled={this.state.running}
        >
          Start
        </button>
        <button
          id="resetButton"
          onClick={ () => this.resetTimer() }
        >
          Reset
        </button>
        <h4>{this.secondsToFormattedTime(this.state.timeRemaining)}</h4>
      </div>

    );
  }
}

export default PomoTime
