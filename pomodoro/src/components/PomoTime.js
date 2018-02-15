import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import dateFormat from 'dateformat';
import ReactCountdownClock from 'react-countdown-clock';


class PomoTime extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPaused: true
    };
  }

  finishTime(){
    console.log("Fin!")
    console.log(ReactCountdownClock)
  }

  secondsToFormattedTime(seconds) {
    console.log("this work?")
    var secondsAsDateObject = new Date(seconds * 1000);
    var correctFormat = dateFormat(secondsAsDateObject, "MM:ss");
    return correctFormat;
  }

  startTimer() {
    console.log('got here');
    console.log(ReactCountdownClock);

    console.log(ReactCountdownClock.paused);
    this.setState({
      isPaused: false
    });

    //ReactCountdownClock.paused = false;
    console.log('got here 2');

   // hide Start button
   /* show Reset Button */
   // Add the timer to the page using some jquery to grab a destination
  }

  resetTimer() {
    this.setState({seconds:5});
    this.setState({seconds:10});
   // hide reset button
   /* show start button */
   // do something with the timer
  }


  render(){
    var bob = (<ReactCountdownClock seconds={20}
                 color="#000"
                 alpha={0.9}
                 size={300}
                 paused={this.state.isPaused}
                 onComplete={this.finishTime}
                 seconds={this.state.seconds}


    />);
    return (
      <div>
        <div className="PomoTime">
           <li> A clock will go here Timer, clock display, button </li>
        </div>
        <button id="startButton" onClick={ () => this.startTimer() }>Start</button>
        <button id="resetButton" onClick={ (/*this.resetTimer*/) => {console.log(this.resetTimer()); console.log(ReactCountdownClock);} }>Reset</button>
        <h4 id="timerTarget"></h4>

        <h4>{this.secondsToFormattedTime(60 * 25)}</h4>

{bob}
      </div>

    );
  }
}

export default PomoTime
