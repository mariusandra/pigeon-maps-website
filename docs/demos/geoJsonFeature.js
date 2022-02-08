import React from "react";
import { Map, GeoJson, GeoJsonFeature } from "pigeon-maps";

const geoJsonFeatureSample = {
  type: "Feature",
  geometry: { type: "Point", coordinates: [2.0, 48.5] },
  properties: { prop0: "value0" },
};

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
      <GeoJson
        data={{ features: [] }}
        svgAttributes={{
          fill: "#d4e6ec99",
          strokeWidth: "1",
          stroke: "white",
          r: "20",
        }}
      >
        <GeoJsonFeature feature={geoJsonFeatureSample} />
      </GeoJson>
    </Map>
  );
}
