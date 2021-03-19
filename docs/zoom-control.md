---
title: ZoomControl
---

import {MyMap} from './demos/zoomControl.js'

Add `+` and `-` zoom buttons.

### Example

<MyMap />

### Code

```js
import React from "react";
import { Map, ZoomControl } from "pigeon-maps";

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <ZoomControl />
    </Map>
  );
}
```

### Options

#### style
Add extra style attributes to the container div. For example: `{ right: 10, top: 10, zIndex: 100 }` to change its position.

#### buttonStyle
Override the style of the buttons themselves. For example: `{ background: 'black', color: 'white' }` to invert its colors.
