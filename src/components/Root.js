import React, { Component } from 'react';
import { connect } from "react-redux";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import Header from './Common/Header';
import {doneTodo, doneToTodo, removeTodo} from '../actions/todo';

class Root extends Component {
  state={
    //SELECTED TAB, 'TODO', OR 'DONE'
    selectedTab: 'todo',
    //SEND SUCCESS MESSAGE
    success: false,
    //LIST OF ALL TODO AND DONE, GET BY PROPS
    todo: [],
    done: []
  }

  componentDidMount() {
    //SET INITIAL TODO LIST
    this.setState({
      todo: this.props.todo,
      done: this.props.done
    })
  }
    

  componentDidUpdate(prevProps) {
    //COMPARE CURRENT TODO LIST AND PREVIOUS TODO LIST
    if((this.props.todo !== prevProps.todo) || (this.props.done !== prevProps.done)) {
      this.setState({
        todo: this.props.todo,
        done: this.props.done
      })
    }
  }

  handleSuccess = () => {
    this.setState({
      success: true
    })
  }

  handleDone = (todo) => {
    this.props.doneTodo(todo)
  }

  handleTodo = (todo) => {
    this.props.doneToTodo(todo)
  }

  handleRemove = (id) => {
    this.props.removeTodo(id)
  }

  render() {
    return(
      <div>
        <Header 
          handleSuccess={this.handleSuccess}
        />
        <Grid container justify="center" className="todo-list-content">
          <Grid item xs={9}>
            <Grid container justify="center" spacing={4}>
              <Grid item xs={12} md={6}>
                <TodoItemPaper>
                  <p className="todos-title">To Do</p>
                  {this.state.todo.map(todo => {
                    return(
                      <Grid key={todo.id} container justify="space-between" alignItems="center" alignContent="center" className="todo-item">
                        <Grid item><span className="todo-value">{todo.value}</span></Grid>
                        <Grid item>
                          <Tooltip title="Done">
                            <IconButton onClick={() => this.handleDone(todo)} aria-label="done" >
                              <i className="material-icons">check</i>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton onClick={() => this.handleRemove(todo.id)} aria-label="delete" >
                              <i className="material-icons">delete</i>
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    )
                  })}
                </TodoItemPaper>
              </Grid>
              <Grid item xs={12} md={6}>
                <TodoItemPaper>
                  <p className="todos-title">Done</p>
                  {this.state.done.map(done => {
                    return(
                      <Grid key={done.id} container justify="space-between" alignItems="center" alignContent="center" className="todo-item">
                        <Grid item><span className="todo-value">{done.value}</span></Grid>
                        <Grid item>
                          <Tooltip title="To do">
                            <IconButton onClick={() => this.handleTodo(done)} aria-label="todo" >
                              <i className="material-icons">close</i>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton onClick={() => this.handleRemove(done.id)} aria-label="delete" >
                              <i className="material-icons">delete</i>
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    )
                  })}
                </TodoItemPaper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
} 

const TodoItemPaper = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 10
    },
  }),
)(Paper);

function mapStateToProps(state) {
  return {
    todo: state.todo.todo,
    done: state.todo.done
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    doneToTodo: (todo) => {
      dispatch(doneToTodo(todo))
    },
    doneTodo: (todo) => {
      dispatch(doneTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)