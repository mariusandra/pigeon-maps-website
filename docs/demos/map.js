import React, { useState } from "react";
import { Map } from "pigeon-maps";

export function MyMap() {
  const [center, setCenter] = useState([50.879, 4.6997]);
  const [zoom, setZoom] = useState(11);
  return (
    <Map
      height={300}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    />
  );
}
