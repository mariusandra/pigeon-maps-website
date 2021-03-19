---
title: Overlay
---

import {MyMap} from './demos/overlay.js'

Anchor random react components to the map

### Example

<MyMap />

### Code

```js
import { Map, Overlay } from 'pigeon-maps'

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>  
      <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
        <img src='pigeon.jpg' width={240} height={158} alt='' />
      </Overlay>
    </Map>
  )
}
```

### Options
#### anchor
At which coordinates `[lat, lng]` to anchor the overlay with the map.

#### offset
Offset in pixels relative to the anchor.
