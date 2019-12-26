import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {

  static defaultPorps ={
    todoList: []
  }

  handleTodoActive = (id) => {
    if(this.props.onActive){
      this.props.onActive(id)
    }
  }

  render() { 
    return ( 
      <ul>
        {this.props.todoList.map((todo, index) => {
          return (
            <Todo todo={todo.content} key={index} id={index} onActive={this.handleTodoActive} active={todo.active} />
          )
        })}
      </ul>
     );
  }
}
 
export default TodoList;