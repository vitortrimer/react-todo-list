import React, { Component } from 'react';
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {addTodo} from '../../actions/todo';

class Header extends Component {
  state = {
    todo: ''
  }

  textFieldKeyPressed = event => {
    if(event.key === "Enter") {
      const min = 5;
      const max = 4000;
      const rand = min + Math.random() * (max - min);
      this.props.addTodo({id: parseInt(rand), value: this.state.todo})
      this.setState({
        todo: ''
      })
      this.props.handleSuccess()
    }
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    })
  }

  onSubmitTodo = event => { 
    event.preventDefault()
    const min = 5;
    const max = 4000;
    const rand = min + Math.random() * (max - min);
    this.props.addTodo({id: parseInt(rand), value: this.state.todo})
    this.setState({
      todo: ''
    })
    this.props.handleSuccess()
  }

  render() {
    return(
      <div>
        <div className="header-background">
        </div>
        <Grid container justify="center" className="header-container">
          <Grid item xs={9}>
            <TodoListPaper className="header-paper">
              <Grid container justify="center">
                <Grid item xs={12}>
                  <h3>To<span className="do-label">do</span> List</h3>
                  <h4><span className="by-label">BY</span> VITOR TRIMER</h4>
                </Grid>
                <Grid container className="search-textfield" justify="center" spacing={2}>
                  <Grid item xs={12} md={9}>
                    <SearchTextField 
                      placeholder="To add press enter or click add"
                      fullWidth
                      value={this.state.todo}
                      onChange={this.handleChange}
                      onKeyPress={this.textFieldKeyPressed}
                    />
                  </Grid>
                  <Grid item>
                    <AddTodoButton 
                      variant="contained" 
                      color="primary"
                      onClick={this.onSubmitTodo}
                    >
                      ADD
                    </AddTodoButton>
                  </Grid>
                </Grid>
              </Grid>
            </TodoListPaper>
          </Grid>
        </Grid>
      </div>
    )
  }
} 

const SearchTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#B51630',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B51630',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#B51630',
      },
      '&:hover fieldset': {
        borderColor: '#B51630',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#B51630',
      },
    },
  },
})(TextField);

const TodoListPaper = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: -120,
      backgroundColor: '#fcfcfc'
    },
  }),
)(Paper);

const AddTodoButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#30706F',
      '&:hover': {
        backgroundColor: '#204f4e'
      }
    },
  }),
)(Button);

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
