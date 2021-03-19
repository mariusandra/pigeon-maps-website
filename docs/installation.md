---
title: Installation
---

First install the `pigeon-maps` package

```shell
# using yarn
yarn add pigeon-maps

# using npm
npm install --save pigeon-maps
```

Then `import` whichever components you need from the package:


```js
import React from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  )
}
```