import React, { Component } from 'react';
import logo from './timer.png';
import './App.css';
import PomoTime from './components/PomoTime.js';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PomoTime />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pomodoro Technique</h1>
        </header>
        <p className="App-intro">
          Want to be productive? Try the Pomodoro app!
        </p>
      </div>
    );
  }
}

export default App;
