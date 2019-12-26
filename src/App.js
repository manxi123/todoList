import React, { Component } from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todoList: [],
      type: ''
    } 
  }


  handleSubmitTodo =(thing) => {
    if (!thing.content) return alert('请输入内容')
    let {todoList} = this.state
    let ob = Object.assign({id: todoList.length, active: false}, thing)
    todoList.push(ob)
    this.setState({todoList})

  }

  handleActiveTodo = (id) => {
    let {todoList} = this.state
    todoList.map((ele) => (
      ele.active = ele.id === id ? !ele.active : ele.active
    ))
    this.setState({
      todoList
    })
  }

  handleChangeType = (type) => {
    this.setState({type})
  }

  render() {
    const { todoList, type } = this.state
    const arr = todoList.filter(item => {
      if (type === 'active') {
        return !item.active
      } else if (type === 'done') {
        return item.active
      } else {
        return item
      }
    })

    return ( 
      <div className="todoWrapper">
      <Header onSubmit={this.handleSubmitTodo} />
      <TodoList todoList={arr} onActive={this.handleActiveTodo} />
      <Footer onChangeType={this.handleChangeType} />
    </div>
     );
  }
}
 
export default App;

