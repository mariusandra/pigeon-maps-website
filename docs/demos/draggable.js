import React, { useState } from "react";
import { Map, Draggable } from "pigeon-maps";
import { PigeonIcon } from "../../src/assets/PigeonIcon";

export function MyMap() {
  const [anchor, setAnchor] = useState([50.879, 4.6997]);

  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
        <PigeonIcon width={100} height={95} />
      </Draggable>
    </Map>
  );
}
