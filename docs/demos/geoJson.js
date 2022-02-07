import React from "react";
import { Map, GeoJson } from "pigeon-maps";

const geoJsonSample = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.0, 48.5] },
      properties: { prop0: "value0" },
    },
  ],
};

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={4}>
      <GeoJson
        data={geoJsonSample}
        styleCallback={(feature, hover) => {
          if (feature.geometry.type === "LineString") {
            return { strokeWidth: "1", stroke: "black" };
          }
          return {
            fill: "#d4e6ec99",
            strokeWidth: "1",
            stroke: "white",
            r: "20",
          };
        }}
      />
    </Map>
  );
}
