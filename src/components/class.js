import React, { Component } from 'react'

export default class Classs extends Component {
  render(props) {
    return (
      <div>
        <h1> Class Component </h1>
        <div> Hello {this.props.name}  and my age is {this.props.age} </div>

      </div>
    )
  }
}
