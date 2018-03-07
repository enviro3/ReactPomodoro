import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import * as firebase from 'firebase';

class TaskList extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {tasks: [], textinput_value: ''};
    this.tasksRef = this.props.firebase.database().ref('tasks');
    console.log("is task list setup working??")

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({textinput_value: event.target.value});
  }

  handleSubmit(event) {
    alert('A task was submitted: ' + this.state.textinput_value);
    event.preventDefault();
    this.tasksRef.push({task: this.state.textinput_value });
    this.setState({textinput_value: ''});
  }

  componentDidMount() {
     this.tasksRef.on('child_added', snapshot => {
       console.log("foo");
       console.log(snapshot.val());
       console.log(snapshot.key);
       let task = {
         key: snapshot.key,
         value: snapshot.val().task,
       };
       console.log(task);
       this.setState({ tasks: this.state.tasks.concat(task)})
     });
   }


  render(){
    console.log("I am working!");
    return(
      <div className="TaskList">
        <div class ="left">
          <h3>Task History</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Task:
              <input type="text" value={this.state.textinput_value} onChange= {this.handleChange}/>
            </label>
            <br />
            <input type="submit" value="Add Quest" />
          </form>
          {
            this.state.tasks.reverse().map((task) =>
              <div key={task.key}>
                {task.value}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
export default TaskList
