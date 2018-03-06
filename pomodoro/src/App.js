import React, { Component } from 'react';
import logo from './timer.png';
import './App.css';
import PomoTime from './components/PomoTime.js';
import TaskList from './components/TaskList.js'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB2VzhS7MofxHZWGP9NQsWEv_iTzJCCkM0",
  authDomain: "pomodoro-react.firebaseapp.com",
  databaseURL: "https://pomodoro-react.firebaseio.com",
  projectId: "pomodoro-react",
  storageBucket: "pomodoro-react.appspot.com",
  messagingSenderId: "72179472717"
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {sessionNumber: (0)};
  }

  nextPhase(){
    this.setState((prevState) => ({sessionNumber: prevState.sessionNumber+1}));
  }

  currentPhaseType() {
    // if should be working, return "work_session";
    if (this.state.sessionNumber%2 ===0){
      return "work_session";
    }
    if (this.state.sessionNumber%8 ===7) {
      return "long_break";
    }
    if (this.state.sessionNumber%2 !==0){
      return "short_break";
    }
  }

  render() {
    return (
      <div className="App">
        {this.currentPhaseType() === "work_session" ? (<PomoTime startingTime={25*60} />) : null}
        {this.currentPhaseType() === "short_break" ? (<PomoTime startingTime={5*60} />) : null}
        {this.currentPhaseType() === "long_break" ? (<PomoTime startingTime={30*60} />) : null}
        <button onClick={ () => this.nextPhase() }>Current Phase: {this.currentPhaseType()}</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pomodoro Technique</h1>
        </header>
        <p className="App-intro">
          Want to be productive? Try the Pomodoro app!
        </p>
        <TaskList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
