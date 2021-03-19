import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} color={color} onClick={() => setHue(hue + 20)} />
    </Map>
  );
}
