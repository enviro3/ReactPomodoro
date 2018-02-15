import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import dateFormat from 'dateformat';

class PomoTime extends Component {

  secondsToFormattedTime(seconds) {
    console.log("this work?")
    var secondsAsDateObject = new Date(seconds * 1000);
    var correctFormat = dateFormat(secondsAsDateObject, "MM:ss");
    return correctFormat;
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
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

  render(){
    return (
      <div>
        <div className="PomoTime">
           <li> A clock will go here Timer, clock display, button </li>
        </div>
        <button onClick={ (this.startTimer) => console.log("Hello") }>Start</button>
        <h4>{this.secondsToFormattedTime(60 * 25)}</h4>
      </div>

    );
  }
}

export default PomoTime
