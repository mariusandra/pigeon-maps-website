import { kea } from 'kea'
import PropTypes from 'prop-types'

export default kea({
  actions: () => ({
    updateValues: (values) => ({ values }),
    toggleValue: (key) => ({ key })
  }),

  reducers: ({ actions }) => ({
    values: [{
      center: [50.879, 4.6997],
      zoom: 13,
      provider: 'wikimedia',
      metaWheelZoom: false,
      twoFingerDrag: false,
      animate: true,
      animating: false,
      zoomSnap: true,
      mouseEvents: true,
      touchEvents: true,
      minZoom: 1,
      maxZoom: 18
    }, PropTypes.object, {
      [actions.updateValues]: (state, payload) => ({ ...state, ...payload.values }),
      [actions.toggleValue]: (state, payload) => ({ ...state, [payload.key]: !state[payload.key] })
    }]
  })
})
