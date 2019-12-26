import React, { Component } from 'react';

class Todo extends Component {

  handleChangeStatus = () => {
    if(this.props.onActive){
      this.props.onActive(this.props.id)
    }
  }

  render() { 
    const {active, todo} = this.props
    return ( 
      <li onClick={this.handleChangeStatus} style={{'textDecoration': active ? 'line-through' : 'none'}}>{todo}</li>
     );
  }
}
 
export default Todo;