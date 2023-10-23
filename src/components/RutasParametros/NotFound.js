import React, { Component } from 'react';
import notfound from '../../assets/images/notfound.jfif'

export default class NotFound extends Component {
  render() {
    return (
      <div><h1>NotFound</h1>
      <img src={notfound} style={{width: "250px", height: "200px"}}></img>
      </div>
    )
  }
}
