---
title: Draggable Overlay
---

import {MyMap} from './demos/draggable.js'

Anchor random react components to the map

### Example

<MyMap />

### Code

```js
import React, { useState } from "react";
import { Map, Draggable } from "pigeon-maps";

export function MyMap() {
  const [anchor, setAnchor] = useState([50.879, 4.6997]);

  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
        <img src="pigeon.svg" width={100} height={95} alt="Pigeon!" />
      </Draggable>
    </Map>
  );
}
```

### Options

#### anchor

At which coordinates `[lat, lng]` to anchor the overlay with the map.

#### offset

Offset in pixels `[x, y]` relative to the anchor.

#### className

CSS class name

#### style

CSS styles

### Events

#### onDragStart

Called when dragging starts: `() => void`

#### onDragMove

Called when dragging the object: `(anchor: Point) => void`

#### onDragEnd

Called when finished dragging: `(anchor: Point) => void`
