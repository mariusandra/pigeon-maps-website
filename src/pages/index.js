import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

import {
  Map,
  Marker,
  Draggable,
  ZoomControl,
  GeoJson,
  GeoJsonLoader,
} from "pigeon-maps";
import * as providers from "pigeon-maps/providers";
import { PigeonIcon } from "../assets/PigeonIcon";

const markers = {
  leuven1: [[50.879, 4.6997], 13],
  leuven2: [[50.874, 4.6947], 13],
  brussels: [[50.8505, 4.35149], 11],
  ghent: [[51.0514, 3.7103], 12],
  coast: [[51.2214, 2.9541], 10],
};

const geoJsonSample = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.0, 48.5] },
      properties: { prop0: "value0" },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [2.0, 48.0],
          [3.0, 49.0],
          [4.0, 48.0],
          [5.0, 49.0],
        ],
      },
      properties: {
        prop0: "value0",
        prop1: 0.0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [0.0, 48.0],
            [1.0, 48.0],
            [1.0, 49.0],
            [0.0, 49.0],
            [0.0, 48.0],
          ],
        ],
      },
      properties: {
        prop0: "value0",
        prop1: { this: "that" },
      },
    },
    {
      type: "Feature",
      properties: { name: "yea" },
      geometry: {
        type: "GeometryCollection",
        geometries: [
          { type: "Point", coordinates: [2.0, 46.5] },
          {
            type: "LineString",
            coordinates: [
              [2.0, 46.0],
              [3.0, 47.0],
              [4.0, 46.0],
              [5.0, 47.0],
            ],
          },
          {
            type: "Polygon",
            coordinates: [
              [
                [0.0, 46.0],
                [1.0, 46.0],
                [1.0, 47.0],
                [0.0, 47.0],
                [0.0, 46.0],
              ],
            ],
          },
        ],
      },
    },
  ],
};

const StamenAttribution = () => (
  <span className="map-attribution">
    Map tiles by{" "}
    <a href="http://stamen.com" target="_blank" rel="noreferrer noopener">
      Stamen Design
    </a>
    , under{" "}
    <a
      href="http://creativecommons.org/licenses/by/3.0"
      target="_blank"
      rel="noreferrer noopener"
    >
      CC BY 3.0
    </a>
    . Data by{" "}
    <a
      href="http://openstreetmap.org"
      target="_blank"
      rel="noreferrer noopener"
    >
      OpenStreetMap
    </a>
    , under{" "}
    <a
      href="http://www.openstreetmap.org/copyright"
      target="_blank"
      rel="noreferrer noopener"
    >
      ODbL
    </a>
    .
  </span>
);
export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [state, setRawState] = useState({
    center: [50.1102, 3.1506],
    zoom: 6,
    provider: "osm",
    metaWheelZoom: false,
    twoFingerDrag: false,
    animate: true,
    animating: false,
    zoomSnap: true,
    mouseEvents: true,
    touchEvents: true,
    minZoom: 1,
    maxZoom: 18,
    dragAnchor: [48.8565, 2.3475],
  });
  const setState = (stateChanges) => setRawState({ ...state, ...stateChanges });

  const {
    center,
    zoom,
    provider,
    animate,
    metaWheelZoom,
    twoFingerDrag,
    zoomSnap,
    mouseEvents,
    touchEvents,
    animating,
    minZoom,
    maxZoom,
  } = state;

  const handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    if (initial) {
      console.log("Got initial bounds: ", bounds);
    }
    setState({ center, zoom });
  };

  const handleClick = ({ event, latLng, pixel }) => {
    console.log("Map clicked!", latLng, pixel);
  };

  const handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor);
  };

  const handleAnimationStart = () => {
    setState({ animating: true });
  };

  const handleAnimationStop = () => {
    setState({ animating: false });
  };

  let providerFunction = providers[provider];
  if (provider === "maptiler") {
    providerFunction = providerFunction("wrAA6s63uzhKow7wUsFT", "streets");
  }

  return (
    <Layout
      title="Demo"
      description="ReactJS maps without external dependencies"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className={clsx("container", styles.heroBannerContainer)}>
          <div className={styles.heroBannerText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <Map
              limitBounds="edge"
              center={center}
              zoom={zoom}
              provider={providerFunction}
              dprs={provider === "osm" ? [1] : [1, 2]}
              onBoundsChanged={handleBoundsChange}
              onClick={handleClick}
              onAnimationStart={handleAnimationStart}
              onAnimationStop={handleAnimationStop}
              animate={animate}
              metaWheelZoom={metaWheelZoom}
              twoFingerDrag={twoFingerDrag}
              zoomSnap={zoomSnap}
              mouseEvents={mouseEvents}
              touchEvents={touchEvents}
              minZoom={minZoom}
              maxZoom={maxZoom}
              attribution={
                provider === "stamenTerrain" || provider === "stamenToner" ? (
                  <StamenAttribution />
                ) : null
              }
              defaultWidth={600}
              height={400}
            >
              {Object.keys(markers).map((key) => (
                <Marker
                  key={key}
                  anchor={markers[key][0]}
                  payload={key}
                  onClick={handleMarkerClick}
                />
              ))}
              <Draggable
                anchor={state.dragAnchor}
                onDragEnd={(dragAnchor) => setState({ dragAnchor })}
                offset={[60, 87]}
                style={{
                  clipPath:
                    "polygon(100% 0, 83% 0, 79% 15%, 0 68%, 0 78%, 39% 84%, 43% 96%, 61% 100%, 79% 90%, 69% 84%, 88% 71%, 100% 15%)",
                }}
              >
                <PigeonIcon width={100} height={95} />
              </Draggable>
              <GeoJsonLoader
                link="https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json"
                styleCallback={(feature, hover) =>
                  hover
                    ? { fill: "#93c0d099", strokeWidth: "2", stroke: "white" }
                    : {
                        fill: "#d4e6ec99",
                        strokeWidth: "1",
                        stroke: "white",
                        r: "20",
                      }
                }
              />
              <GeoJson
                data={geoJsonSample}
                styleCallback={(feature, hover) => {
                  if (feature.geometry.type === "LineString") {
                    return { strokeWidth: "1", stroke: "black" };
                  }
                  return {
                    fill: "#ff000099",
                    strokeWidth: "1",
                    stroke: "white",
                    r: "4",
                  };
                }}
              />
              <ZoomControl />
            </Map>
            <div className={styles.mapControls}>
              <div>
                {Math.round(center[0] * 10000) / 10000}
                {" x "}
                {Math.round(center[1] * 10000) / 10000}
                {" @ "}
                {Math.round(zoom * 100) / 100}
                {" - "}
                {animating ? "animating" : "stopped"}
              </div>

              <div style={{ marginTop: 20 }}>
                Visit:
                {Object.keys(markers).map((key) => (
                  <button
                    className="button button--secondary button--sm"
                    style={{ margin: "0 10px" }}
                    key={key}
                    onClick={() =>
                      setState({
                        center: markers[key][0],
                        zoom: markers[key][1],
                      })
                    }
                  >
                    {key}
                  </button>
                ))}
                <button
                  className="button button--secondary button--sm"
                  style={{ margin: "0 10px" }}
                  onClick={() =>
                    setState({ center: state.dragAnchor, zoom: 5 })
                  }
                >
                  Pigeon
                </button>
              </div>
              <div style={{ marginTop: 20 }}>
                Map Layer:
                {Object.keys(providers).map((key) => (
                  <button
                    key={key}
                    onClick={() => setState({ provider: key })}
                    className="button button--secondary button--sm"
                    style={{
                      margin: "0 10px",
                      fontWeight: provider === key ? "bold" : "normal",
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                Options:
                <label className={styles.mapCheckbox}>
                  <input
                    type="checkbox"
                    checked={animate}
                    onChange={(e) => setState({ animate: !animate })}
                  />
                  animation
                </label>
                <label className={styles.mapCheckbox}>
                  <input
                    type="checkbox"
                    checked={twoFingerDrag}
                    onChange={(e) =>
                      setState({ twoFingerDrag: !twoFingerDrag })
                    }
                  />
                  two finger drag
                </label>
                <label className={styles.mapCheckbox}>
                  <input
                    type="checkbox"
                    checked={metaWheelZoom}
                    onChange={(e) =>
                      setState({ metaWheelZoom: !metaWheelZoom })
                    }
                  />
                  meta wheel zoom
                </label>
                <label className={styles.mapCheckbox}>
                  <input
                    type="checkbox"
                    checked={zoomSnap}
                    onChange={(e) => setState({ zoomSnap: !zoomSnap })}
                  />
                  zoom snap
                </label>
                <label className={styles.mapCheckbox}>
                  <input
                    type="checkbox"
                    checked={mouseEvents}
                    onChange={(e) => setState({ mouseEvents: !mouseEvents })}
                  />
                  mouse events
                </label>
                <label className={styles.mapCheckbox}>
                  <input
                    type="checkbox"
                    checked={touchEvents}
                    onChange={(e) => setState({ touchEvents: !touchEvents })}
                  />
                  touch events
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}
