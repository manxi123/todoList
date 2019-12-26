import React, { Component } from 'react';

class Footer extends Component {
  
 handleType = (type) => {
  if(this.props.onChangeType) {
    this.props.onChangeType(type)
  }
 }

  render() { 
    return ( 
      <div>
        <button onClick={() => this.handleType('all')}>All</button>
        <button onClick={() => this.handleType('active')}>Active</button>
        <button onClick={() => this.handleType('done')}>Done</button>
      </div>
     );
  }
}
 
export default Footer;