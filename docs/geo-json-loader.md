---
title: GeoJsonLoader
---

import {MyMap} from './demos/geoJsonLoader.js'

Renders GeoJson file. This component is intended to easily use external GeoJson files. But it does not handle loading errors at all.
So you should rather use the `GeoJson` component in production.

### Example

<MyMap />

### Code

```js
import { Map, GeoJsonLoader } from "pigeon-maps";

const geoJsonLink = "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json"

const MyMap = () => (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
      <GeoJsonLoader
        link={geoJsonLink}
        styleCallback={(feature, hover) =>
          hover
            ? { fill: '#93c0d099', strokeWidth: '2'}
            : { fill: '#d4e6ec99', strokeWidth: '1'}
        }
      />
    </Map>
)
```

### Options

#### link

A link to a geo json file

#### styleCallback

A callback function that is taking a a geojson feature and a boolean indicating if that feature is hovered.
It should return an object of svg attributes depending on the type of feature either for `circle` or `path`.

#### svgAttributes

An object of svg attributes depending on the type of feature either for `circle` or `path`.

#### className

An additional class name for the wrapper `div`.

#### style

Additional styling for the wrapper `div`.

### Events

#### onClick

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onContextMenu

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onMouseOver

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onMouseOut

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

### Attribution

GeoJson File of Germany by [isellsoap](https://github.com/isellsoap/deutschlandGeoJSON)
