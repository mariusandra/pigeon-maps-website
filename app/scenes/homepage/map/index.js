import React, { Component } from 'react'
import { connect } from 'kea'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

import { providers, markers } from '../config'

import logic from '../logic'

const StamenAttribution = () => (
  <span className='map-attribution'>
    Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
  </span>
)

const DivMarker = ({ left, top, style, children }) => (
  <div style={{
    position: 'absolute',
    left: left,
    top: top,
    ...(style || {})
  }}>{children}</div>
)

const YellowMarker = ({ left, top, style, children }) => (
  <div style={{
    position: 'absolute',
    left: left - 15,
    top: top - 30,
    width: 30,
    height: 30,
    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',
    background: 'yellow',
    ...(style || {})
  }}>{children}</div>
)

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
export default class MapDemo extends Component {
  handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    if (initial) {
      console.log('Got initial bounds: ', bounds)
    }
    const { updateValues } = this.actions
    updateValues({ center, zoom })
  }

  handleClick = ({ event, latLng, pixel }) => {
    console.log('Map clicked!', latLng, pixel)
  }

  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }

  handleAnimationStart = () => {
    const { updateValues } = this.actions
    updateValues({ animating: true })
  }

  handleAnimationStop = () => {
    const { updateValues } = this.actions
    updateValues({ animating: false })
  }

  render () {
    const { values } = this.props
    const { provider } = values

    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Map
            {...values}
            provider={providers[provider]}
            onBoundsChanged={this.handleBoundsChange}
            onClick={this.handleClick}
            onAnimationStart={this.handleAnimationStart}
            onAnimationStop={this.handleAnimationStop}
            dprs={provider === 'osm' ? [1] : [1, 2]}
            attribution={
              provider === 'stamenToner' || provider === 'stamenTerrain'
                ? <StamenAttribution />
                : null}
            defaultWidth={600}
            height={400}>
            {Object.keys(markers).map(key => (
              <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
            ))}
          </Map>
        </div>
      </div>
    )
  }
}
