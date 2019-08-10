import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

import uzb from "../static/uzb.json";

class UzbekistanMap extends Component {
  componentDidMount() {
    console.log("uzb", uzb);
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <ComposableMap
          projection="mercator"
          projectionConfig={{
            scale: 3000
          }}
          width={920}
          height={600}
          style={{
            width: "70%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[64.6, 41.5]} disablePanning>
            <Geographies geography={uzb}>
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    geography.id !== "ATA" && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          hover: {
                            fill: "#607D8B",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          pressed: {
                            fill: "#FF5722",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          }
                        }}
                      />
                    )
                )
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default UzbekistanMap;
