import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
            <NavLink to='/'>Home </NavLink>

            <NavLink to='/tabla/21'> TablaMultiplicar 21</NavLink>

            <NavLink to='/notfound'> No existo</NavLink>

            <NavLink to='/collatz/3'> Collatz de 3</NavLink>

            <NavLink to='/collatz/15'> Collatz de 15</NavLink>
      </div>
    )
  }
}
