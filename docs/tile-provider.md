---
title: Choosing a Tile Provider
---

import { Map, ZoomControl } from 'pigeon-maps'
import * as providers from 'pigeon-maps/providers'

Pigeon Maps defaults to loading map tiles from [OpenStreetMap.org](https://www.openstreetmap.org/). While free (thanks to volunteers and [donations](https://wiki.openstreetmap.org/wiki/Donations)), these OSM tiles aren't the best looking visually.

Usually you want to specify a custom map tile provider. There are [many](https://wiki.openstreetmap.org/wiki/Commercial_OSM_Software_and_Services) commercial tile servers to choose from
and you can even [set up your own](https://openmaptiles.org/).

## Using a custom tile provider

To specify your own provider, create a function with the signature `(x: number, y: number, z: number, dpr?: number) => string` which
returns the URL of the tile.

One nice provider is [MapTiler](https://www.maptiler.com/cloud/). Their maps look good and their free plan provides up to 100k tile loads per month.
You will need to sign up for an account and pass your API key and map id to the following provider

```js
const MAPTILER_ACCESS_TOKEN = ''
const MAP_ID = ''

function mapTiler (x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

return (
  <Map
    provider={mapTiler}
    dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
    height={300}
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
  />
)
```

## Included providers

Pigeon Maps comes with a few providers you can `import` and use directly. 

### osm

This is the default provider. Free and supported by [donations](https://wiki.openstreetmap.org/wiki/Donations). Does not support HiDPI/retina tiles.

<Map provider={providers.osm} height={200} defaultCenter={[50.879, 4.6997]} defaultZoom={11} metaWheelZoom twoFingerDrag><ZoomControl /></Map>

```js
import React from 'react'
import { Map } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'

return (
  <Map
    provider={osm}
    height={200}
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
  />
)
```

### stamenTerrain

Orient yourself with our terrain maps, featuring hill shading and natural vegetation colors. These maps showcase advanced labeling and linework generalization of dual-carriageway roads.

<Map provider={providers.stamenTerrain} height={200} dprs={[1, 2]} defaultCenter={[50.879, 4.6997]} defaultZoom={11} metaWheelZoom twoFingerDrag><ZoomControl /></Map>

```js
import React from 'react'
import { Map } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

return (
  <Map
    provider={stamenTerrain}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    height={200}
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
  />
)
```

### stamenToner

These high-contrast B+W (black and white) maps are perfect for data mashups and exploring river meanders and coastal zones.

<Map provider={providers.stamenToner} height={200} dprs={[1, 2]} defaultCenter={[50.879, 4.6997]} defaultZoom={11} metaWheelZoom twoFingerDrag><ZoomControl /></Map>

```js
import React from 'react'
import { Map } from 'pigeon-maps'
import { stamenToner } from 'pigeon-maps/providers'

return (
  <Map
    provider={stamenToner}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    height={200}
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
  />
)
```
