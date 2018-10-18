import './styles.scss'
import logo from './_assets/logo-white.svg'

import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <header className='body-header'>
        <nav>
          <div style={{ lineHeight: '50px' }}>
            <img src={logo} style={{ height: 40, marginTop: 5 }} />
          </div>
          <NavLink to='/' exact style={{ fontSize: 16 }}>Pigeon Maps</NavLink>

          <a className='right' href='https://www.github.com/mariusandra/pigeon-maps' target='_blank'>Github</a>
        </nav>
      </header>
    )
  }
}
