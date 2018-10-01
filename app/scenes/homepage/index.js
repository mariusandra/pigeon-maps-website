import React, { Component } from 'react'

import Map from './map'
import Controls from './controls'
import Links from './links'

export default class App extends Component {
  render () {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <Map />
        <Controls />
        <Links />
      </div>
    )
  }
}
