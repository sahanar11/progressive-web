import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Task from './components/TaskDiv';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class App extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {
      tasks: []
    }
  }
 addTask () {
   const {tasks} = this.state;
  tasks.push(1);
  this.setState({tasks});
 } 

  render () {
    console.log("total count = ", this.state.tasks.length);
    return (
      <div className="App">
      <div className="task-container">
       <Tooltip title="Add a task" placement="right-start">
       <Button onClick={this.addTask} variant="fab" color="primary" aria-label="Add" className={this.props.classes.button}>
        <AddIcon />
      </Button>
      </Tooltip>
      {
        this.state.tasks.map( (value,index) => {
          return <Task/>
        })
      } 
      
      </div>
      </div>
    );
  }
}

// FloatingActionButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(App);
