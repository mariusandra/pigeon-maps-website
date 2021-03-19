---
title: Marker
---

import {MyMap} from './demos/marker.js' 

Add simple markers.

### Example

<MyMap />

### Code

```js
import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker 
        anchor={[50.879, 4.6997]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
    </Map>
  );
}
```

### Options

#### anchor
At which coordinates `[lat, lng]` to anchor the marker with the map.

#### width and height
Size of the marker. Any of the two can be omitted.

#### payload
Random payload that will be returned on events.

#### hover
Should we show the "hover" state of the marker? Default: `undefined`

### Events

#### onClick
`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onContextMenu
`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onMouseOver
`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`

#### onMouseOut
`({ event: HTMLMouseEvent, anchor: Point, payload: any }) => void`
