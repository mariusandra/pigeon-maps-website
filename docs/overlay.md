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
        <img src='/img/pigeon.jpg' width={240} height={158} alt='' />
      </Overlay>
    </Map>
  )
}
```

### Options
#### anchor
At which coordinates `[lat, lng]` to anchor the overlay with the map.

#### offset
Offset in pixels `[x, y]` relative to the anchor.

### Attribution

Pigeon image by [Robert Claypool](https://www.flickr.com/photos/35106989@N08/7934833110/in/photolist-d6b6rq-9Mukwr-7ZmKb4-fGmwjr-j88Kou-8rMH5s-fhVDED-bMKvR8-o1g6uD-6ymdPD-fXtb7c-pfRt2D-dAChga-cJnQWu-f8EZou-9kcduE-oGhwp5-fGD6YW-dSLETS-anJCUh-98SLJQ-7bkuhT-4uSjrb-bfg6HB-qs9sHM-4gYYBL-q4GXdw-a4gKa9-iWxwyC-4HwW6X-auscdw-9mxYrg-9s659U-X7Nvz-dqcKc2-nE1XAU-qbXkKQ-4RpEww-cwxt6A-5HMS77-mGNr2K-aGjzm4-6AUdCU-9qyyvt-ceov6E-5APWsT-9mB1Hw-emfCwt-bFSixV-4dn3Cs)
