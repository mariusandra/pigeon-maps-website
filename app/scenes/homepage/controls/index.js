import React, { Component } from 'react'
import { connect } from 'kea'

import { providers, markers } from '../config'

import logic from '../logic'

const mapboxEnabled = false

function isMapBox (provider) {
  return provider === 'streets' || provider === 'satellite' || provider === 'outdoors' || provider === 'light' || provider === 'dark'
}

@connect({
  props: [
    logic, [
      'values'
    ]
  ],
  actions: [
    logic, [
      'updateValues',
      'toggleValue'
    ]
  ]
})
export default class Controls extends Component {
  zoomIn = () => {
    const { values: { zoom } } = this.props
    const { updateValues } = this.actions
    updateValues({
      zoom: Math.min(zoom + 1, 18)
    })
  }

  zoomOut = () => {
    const { values: { zoom } } = this.props
    const { updateValues } = this.actions
    updateValues({
      zoom: Math.max(zoom - 1, 1)
    })
  }

  render () {
    const { values } = this.props
    const { updateValues, toggleValue } = this.actions

    const {
      center,
      zoom,
      provider,
      animate,
      metaWheelZoom,
      twoFingerDrag,
      zoomSnap,
      mouseEvents,
      touchEvents,
      animating,
      minZoom,
      maxZoom
    } = values

    return (
      <div>
        <div>
          <button onClick={this.zoomIn}>Zoom In</button>
          <button onClick={this.zoomOut}>Zoom Out</button>
          {' '}
          {Math.round(center[0] * 10000) / 10000}
          {' x '}
          {Math.round(center[1] * 10000) / 10000}
          {' @ '}
          {Math.round(zoom * 100) / 100}
          {' - '}
          {animating ? 'animating' : 'stopped'}
        </div>
        <div style={{marginTop: 20}}>
          {Object.keys(providers).map(key => (
            <button
              key={key}
              onClick={() => isMapBox(key) && !mapboxEnabled
                              ? window.alert('Mapbox tiles disabled! See issue #33 for details!')
                              : updateValues({ provider: key })}
              style={{
                fontWeight: provider === key ? 'bold' : 'normal',
                color: isMapBox(key) && !mapboxEnabled ? '#aaa' : '#000'
              }}>
              {key}
            </button>
          ))}
        </div>
        <div style={{marginTop: 20}}>
          <button onClick={() => toggleValue('animate')}>{animate ? '[X] animation' : '[ ] animation'}</button>
          <button onClick={() => toggleValue('twoFingerDrag')}>{twoFingerDrag ? '[X] two finger drag' : '[ ] two finger drag'}</button>
          <button onClick={() => toggleValue('metaWheelZoom')}>{metaWheelZoom ? '[X] meta wheel zoom' : '[ ] meta wheel zoom'}</button>
          <button onClick={() => toggleValue('zoomSnap')}>{zoomSnap ? '[X] zoom snap' : '[ ] zoom snap'}</button>
          <button onClick={() => toggleValue('mouseEvents')}>{mouseEvents ? '[X] mouse events' : '[ ] mouse events'}</button>
          <button onClick={() => toggleValue('touchEvents')}>{touchEvents ? '[X] touch events' : '[ ] touch events'}</button>
        </div>
        <div style={{marginTop: 20}}>
          minZoom: <input onChange={(e) => updateValues({ minZoom: parseInt(e.target.value) || 1 })} value={minZoom} type='number' style={{ width: 40 }} />
          {' '}
          maxZoom: <input onChange={(e) => updateValues({ maxZoom: parseInt(e.target.value) || 18 })} value={maxZoom} type='number' style={{ width: 40 }} />
        </div>
        <div style={{marginTop: 20}}>
          {Object.keys(markers).map(key => (
            <button key={key} onClick={() => updateValues({ center: markers[key][0], zoom: markers[key][1] })}>{key}</button>
          ))}
        </div>
      </div>
    )
  }
}
