---
title: GeoJsonFeature
---

import {MyMap} from './demos/geoJsonFeature.js'

Renders a single feature from inside a GeoJson component.

### Example

<MyMap />

### Code

```js
import { Map, GeoJson, GeoJsonFeature } from "pigeon-maps";

const geoJsonFeatureSample = {
  type: "Feature",
  geometry: { type: "Point", coordinates: [2.0, 48.5] },
  properties: { prop0: "value0" },
};

const MyMap = () => (
  <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
    <GeoJson
      svgAttributes={{
        fill: "#d4e6ec99",
        strokeWidth: "1",
        stroke: "white",
        r: "20",
      }}
    >
      <GeoJsonFeature feature={geoJsonFeatureSample} />
    </GeoJson>
  </Map>
);
```

### Options

#### styleCallback

A callback function that is taking a a geojson feature and a boolean indicating if that feature is hovered.
It should return an object of svg attributes depending on the type of feature either for `circle` or `path`.

#### svgAttributes

An object of svg attributes depending on the type of feature either for `circle` or `path`.

#### hover

If this component is hovered or not.

### Events

#### onClick

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onContextMenu

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onMouseOver

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onMouseOut

`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`
