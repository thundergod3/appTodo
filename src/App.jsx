import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import StyleGlobal from './JSS';
import Todos from './View/Todos';
import AddTodo from "./View/AddTodo"

class App extends Component {
  constructor(props) {
    super(props)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  state = {
    todos: [
      {
        content: "Buy some Vape",
        id: 1
      },
      {
        content: "Buy some Pop",
        id: 2
      }
    ]
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos // if the key and value have the same name, we can set short name of state like this
    })
  }

  addTodo(todo) {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    console.log(todos)
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default withStyles(StyleGlobal)(App);
