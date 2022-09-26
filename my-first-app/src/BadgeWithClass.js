import React, { Component } from 'react'

export default class BadgeWithClass extends Component {

    constructor(){
        super();
        this.state = {count: 0}
    }


incrementCount(){
    console.log('click event invoked...')
    // No direct mutations to state... always use setState
    // this.state.count++;
    this.setState({count : this.state.count + 1});
    console.log(this.state.count)
}

  render() {
    return (
        <button type="button" className="btn btn-primary" onClick={this.incrementCount.bind(this)}>
            {this.props.caption} <span className="badge text-bg-secondary">{this.state.count}</span>
       </button>
    )
  }
}
