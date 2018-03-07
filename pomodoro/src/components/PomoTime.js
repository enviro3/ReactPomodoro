import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import dateFormat from 'dateformat';
import buzz from 'buzz';


class PomoTime extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {timeRemaining: (props.startingTime), running: false};
    this.audioElement = document.createElement('audio');
    this.audioElement.src = "assets/9029__mistertood__metalboom5.wav";
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
    if (this.state.timeRemaining !== 0 && this.state.running){
      this.setState((prevState) => ({timeRemaining: prevState.timeRemaining-1}));
    }
    else if(this.state.timeRemaining == 0) {
      clearInterval(this.timerID);
      this.audioElement.play();
    }
  }

  startTimer(timeRemaining) {
    console.log(this.state.timeRemaining-1);
    this.timerID  = setInterval(() => this.tick(), 1000);
    this.setState((prevState) => ({running: true}));

  }

  resetTimer(){
    this.setState((prevState) => ({timeRemaining: (this.props.startingTime)}));
    this.setState((prevState) => ({running: false}));
    clearInterval(this.timerID);

  }

  pauseTimer(){
    this.setState((prevState) => ({running: false}));
  }


  render(){
    return (
      <div>
        <div className="PomoTime">
           <h3>Welcome to your most productive self!</h3>
        </div>
        <button
          id="startButton"
          onClick={ () => this.startTimer()}
          disabled={this.state.running}
        >
          Start
        </button>

        <button disabled={this.state.running ? false : true}
          id="pauseButton"
          onClick={ () => this.pauseTimer()}
        >
          Pause
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
