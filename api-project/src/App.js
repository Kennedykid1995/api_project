import React, { Component, useState } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Todos from "./Components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take Out Trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting",
        completed: false,
      }
    ]
  }
  //toggle complete
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  delTodo = (id) => {
    console.log(id)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})

  }
  render() {
    return (
      <div className="App">
        <Todos delTodo={this.delTodo} markComplete={this.markComplete} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
