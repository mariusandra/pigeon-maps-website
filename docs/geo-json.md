---
title: GeoJson
---

import {MyMap} from './demos/geoJson.js'

Renders a GeoJson object

### Example

<MyMap />

### Code

```js
import { Map, GeoJson } from "pigeon-maps";

const geoJsonSample = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.0, 48.5] },
      properties: { prop0: "value0" },
    },
  ],
};

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
      <GeoJson
        data={geoJsonSample}
        styleCallback={(feature, hover) => {
          if (feature.geometry.type === "LineString") {
            return { strokeWidth: "1", stroke: "black" };
          }
          return {
            fill: "#d4e6ec99",
            strokeWidth: "1",
            stroke: "white",
            r: "20",
          };
        }}
      />
    </Map>
  );
}
```

### Options

#### data

An object of GeoJson data

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
