---
title: Map
---

import {MyMap} from './demos/map.js' 

The main map component.

### Example

<MyMap />

### Code

```js
import React, { useState } from 'react'
import { Map } from 'pigeon-maps'

export function MyMap() {
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)
  return (
    <Map 
      height={300}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    />
  )
}
```

### Options

#### provider
Function that returns a [TMS URL](https://wiki.openstreetmap.org/wiki/TMS): `(x, y, z, dpr) => url`. The argument `dpr` will be a value from the `dprs` array (see below) or `undefined` when requesting the default tile.

#### center
Coordinates of the map center in the format `[lat, lng]`. Use if the component is controlled, e.g. you'll be listening to `onBoundsChanged` and passing a new `center` when the bounds change.

#### defaultCenter
Initial coordinates of the map center in the format `[lat, lng]`. Use if the component is uncontrolled.

#### zoom
Current zoom level, e.g. `12`, use for controlled components and update when `onBoundsChanged` give you a new value.

#### defaultZoom
The initial zoom for uncontrolled components.

#### width
Width of the component in pixels. Defaults to `100%` of the parent div if not set.

#### height
Height of the component in pixels. Defaults to `100%` of the parent div if not set.

#### defaultWidth
If you don't specify a `width`, we wait until the component is mounted and measure the container before rendering tiles, markers and other objects. Setting `defaultWidth` assumes a width and renders everything before mounting. If the actual width of the component differs, it will just be re-rendered. Use this for example to render tiles on server rendering, when `width` is not set.

#### defaultHeight
Similar as `defaultWidth`, but for the `height`.

#### dprs
An array of `devicePixelRatio`s that your tile provider supports. Defaults to `[]`. Pass an array like `[1, 2]` and the numbers here will be sent to `provider` as the 4th argument. The responses will be combined into an `<img srcset>` attribute, which modern browsers use to select tiles with [the right resolution](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Same_size_different_resolutions).

#### animate
Animations enabled, `true`.

#### animateMaxScreens
If an updated `center` prop is more than `animateMaxScreens` screens away, we will directly switch to it, otherwise smoothly animate to it. Defaults to `5`

#### zoomSnap
Snap to discrete zoom increments (14, 15, 16, etc) when scrolling with the mouse or pinching with touch events, Defaults to `true`.

#### minZoom
The lowest zoom level possible. Defaults to `1`

#### maxZoom
The highest zoom level possible. Defaults to `18`

#### attribution
What to show as an [attribution](https://www.openstreetmap.org/copyright). React node or `false` to hide.

#### attributionPrefix
Prefix before attribution. React node or `false` to hide.

#### mouseEvents
Can the user interact with the map with the mouse? Defaults to `true`.

#### touchEvents
Can the user interact with the map by touching it? Defaults to `true`.

#### metaWheelZoom
Zooming with the mouse wheel only works when you hold down the `cmd` or `ctrl` keys. Defaults to `false`.

#### metaWheelZoomWarning
Warning text to show if scrolling on a map with `metaWheelZoom` enabled, but without the meta key. Defaults to `Use META+wheel to zoom!`, where `META` is automatically replaced with either "⌘" or "⊞", depending on Mac vs non-Mac. Set to `null` to disable.

#### twoFingerDrag
Moving the map requires touching with two fingers. Defaults to `false`.

#### twoFingerDragWarning
Warning to show when `twoFingerDrag` and you try to move the map with one finger. Defaults to `Use two fingers to move the map`. Set to `null` to disable.

#### warningZIndex
The `z-index` value for the meta warning. Defaults to `100`

#### boxClassname
The classname for the tiles div, allowing you to style it with a filter css property without impacting the overlays.

#### tileComponent
This component renders the actual `<img />` tile. Takes two props: `tile` for the actual tile data, and `tileLoaded`, which is a function that *must* be called after your tile loads. Feel free to call it via `useEffect(tileLoaded, [])` if your tile has no async loading logic.

Defaults to `ImgTile`:

```ts
const ImgTile: TileComponent = ({ tile, tileLoaded }) => (
  <img
    src={tile.url}
    srcSet={tile.srcSet}
    width={tile.width}
    height={tile.height}
    loading={'lazy'}
    onLoad={tileLoaded}
    alt={''}
    style={{
      position: 'absolute',
      left: tile.left,
      top: tile.top,
      willChange: 'transform',
      transformOrigin: 'top left',
      opacity: 1,
    }}
  />
)
```

### Events

#### onClick
When map is clicked `function ({ event, latLng, pixel })`

#### onBoundsChanged
When the bounds change, `function ({ center, zoom, bounds, initial })`. Use this for a controlled component, then set `center` and `zoom` when it's called. This callback also gets called on the initial mount (when the first bounds become known). In this case the prop `initial` will be set to `true`. It will be `false` on all subsequent calls.

#### onAnimationStart
Called when the map starts moving

#### onAnimationStop
Called when the map stops moving
