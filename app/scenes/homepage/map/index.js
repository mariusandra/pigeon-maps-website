import React, { Component } from 'react'
import { connect } from 'kea'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

import { providers, markers } from '../config'

import logic from '../logic'

function isMapBox (provider) {
  return provider === 'streets' || provider === 'satellite' || provider === 'outdoors' || provider === 'light' || provider === 'dark'
}

const MapboxAttribution = () => (
  <span className='map-attribution'>
    <span>© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a></span>{' | '}
    <span>© <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a></span>{' | '}
    <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>
  </span>
)

const StamenAttribution = () => (
  <span className='map-attribution'>
    Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
  </span>
)

const WikimediaAttribution = () => (
  <span className='map-attribution'>
    Map tiles by <a href='https://foundation.wikimedia.org/w/index.php?title=Maps_Terms_of_Use#Where_does_the_map_data_come_from.3F'>Wikimedia</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>
  </span>
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
      <div style={{textAlign: 'center', marginTop: 50}}>
        <div style={{maxWidth: 600, margin: '0 auto'}}>
          <Map
            {...values}
            provider={providers[provider]}
            onBoundsChanged={this.handleBoundsChange}
            onClick={this.handleClick}
            onAnimationStart={this.handleAnimationStart}
            onAnimationStop={this.handleAnimationStop}
            attribution={
              isMapBox(provider)
                ? <MapboxAttribution />
                : provider === 'stamen'
                  ? <StamenAttribution />
                  : provider === 'wikimedia'
                    ? <WikimediaAttribution />
                    : null}
            defaultWidth={600}
            height={400}>
            {Object.keys(markers).map(key => (
              <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
            ))}
            {isMapBox(provider) && <span className='mapbox-wordmark' />}
          </Map>
        </div>
      </div>
    )
  }
}
