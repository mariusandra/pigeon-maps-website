import React from "react";
import { Map, ZoomControl } from "pigeon-maps";

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <ZoomControl />
    </Map>
  );
}
