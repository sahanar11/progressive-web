import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "70%",
      margin: "1px",
    },
    dense: {
    //   marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      state = {
        checkedA: true,
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
      checking = () => {
        var style = {textDecoration: 'none'};
        if (checkedA === true) {
            style = {textDecoration: 'line-through'}
        }
      };
    render() {
      return (
        <div className="task"> 
        <Checkbox className="check"
        checked={this.state.checkedA}
        onClick={this.checking()}
        onChange={this.handleChange('checkedA')}
        value="checkedA"/>
        <TextField
          id="filled-multiline-flexible"
          value={this.state.multiline}
          className={this.props.classes.textField}  />

        <IconButton className={this.props.classes.button} aria-label="Delete">
            <DeleteIcon />
        </IconButton>
        </div>
      );
    }
}
  
export default withStyles(styles)(Task);