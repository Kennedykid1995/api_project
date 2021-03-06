import React, { Component, useState } from 'react';
import { Link, Route } from "react-router-dom"; 
import TodoItem from "./TodoItem"; 
import PropTypes from "prop-types"; 

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem delTodo={this.props.delTodo} markComplete={this.props.markComplete} key={todo.id} todo={todo} />
    ))
  }
}
//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,  
}

export default Todos;
