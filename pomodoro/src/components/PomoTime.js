import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import dateFormat from 'dateformat';

class PomoTime extends Component {
  constructor(props){
    super(props);
    this.state = {timeRemaining: 25};
  }


  secondsToFormattedTime(seconds) {
    console.log("this work?")
    var secondsAsDateObject = new Date(seconds * 1000);
    var correctFormat = dateFormat(secondsAsDateObject, "MM:ss");
    return correctFormat;
  }

  startTimer(timeRemaining) {
    console.log(this.state.timeRemaining-1);
    /*if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    } */
    var currentTime = this.state.timeRemaining;
    while (currentTime> 1){
      console.log("is this running????")
      var newTimeRemaining = this.setState((prevState) => ({timeRemaining: prevState.timeRemaining-1}));

      // this.setState((prevState) => ({timeRemaining: prevState.timeRemaining-1}));
    }

    //this.setState((prevState) => ({timeRemaining: prevState.timeRemaining-1}));
    //onClick{this.state = 5}
  }
  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render(){
    return (
      <div>
        <div className="PomoTime">
           <li>A clock will go here Timer, clock display, button </li>
        </div>
        <button id="startButton" onClick={ () => this.startTimer() } >Start</button>
        <button id="resetButton" onClick={ (/*this.resetTimer*/) => console.log("Hello") }>Reset</button>
        <h4>{this.secondsToFormattedTime(this.state.timeRemaining)}</h4>
      </div>

    );
  }
}

export default PomoTime
