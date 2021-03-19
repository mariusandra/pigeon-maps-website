import React from "react";
import { Map, Overlay } from "pigeon-maps";
import { useBaseUrl } from "@docusaurus/useBaseUrl";

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
        <img src={'/img/pigeon.jpg'} width={240} height={158} alt="" />
      </Overlay>
    </Map>
  );
}
