---
title: Tile Provider
---

Pigeon Maps defaults to loading map tiles from [OpenStreetMap.org](https://www.openstreetmap.org/). While free (thanks to volunteers and donations), these OSM tiles aren't the best looking visually.
 
Usually you want to specify a custom map tile provider. There are [many](https://wiki.openstreetmap.org/wiki/Commercial_OSM_Software_and_Services) commercial tile servers to choose from
and you can even [set up your own](https://openmaptiles.org/).

One nice option is [MapTiler](https://www.maptiler.com/cloud/). Their maps look good and their free plan provides up to 100k tile loads per month.
You will need to sign up for an account and pass your API key and map id to the following provider

```jsx
const MAPTILER_ACCESS_TOKEN = ''
const MAP_ID = ''

function mapTilerProvider (x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

render(
  <Map
    provider={mapTilerProvider} 
    dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them 
    ...
  />
)
```

Adapt this example for other providers you might want to use.

