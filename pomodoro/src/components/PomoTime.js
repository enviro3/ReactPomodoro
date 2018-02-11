import React, {Component} from 'react';

class PomoTime extends Component {
  render(){
    return (
      <div className="PomoTime">
         <button onClick={this.increment.bind(this)}>Increment</button>
         <li> A clock will go here Timer, clock display, button </li>
      </div>
    );
  }
}
