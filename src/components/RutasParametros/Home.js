import React, { Component } from 'react';
import home from '../../assets/images/home.jfif'

export default class Home extends Component {
  render() {
    return (
      <div><h1>Home</h1>
      <img src={home} style={{width: "250px", height: "200px"}}></img>
      </div>
    )
  }
}
