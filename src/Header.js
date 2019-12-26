import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state={
      content: ''
    }
  }

  handleChangething = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleAddThing = () => {
    let {content} = this.state
    if (this.props.onSubmit) {
      this.props.onSubmit({content})
    }
    // 将输入框置空
    this.setState({
      content: ''
    })
  }

  render() { 
    return ( 
      <div className="header">
        <input value={this.state.content} onChange={this.handleChangething} />
        <button onClick={this.handleAddThing}>Add</button>
      </div>
     );
  }
}
 
export default Header;