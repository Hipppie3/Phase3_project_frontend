import { Link } from "react-router-dom";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json";

const MapChart = ({ setTooltipContent, name, id }) => {
  return (
    <div data-tip="">
      <ComposableMap
        width={650}
        height={675}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-90, -35, -10],
          scale: 400,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltipContent(`${geo.properties.geounit}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                onClick={() => {
                  <Link to={`/Country/${id}`} className="countryLink">
                    <div>
                      <tr className="country">{name}</tr>
                    </div>
                  </Link>;
                }}
                style={{
                  default: {
                    fill: "gray",
                    outline: "none",
                  },
                  hover: {
                    fill: "lightGray",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;

// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Graticule
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json";

// const MapChart = () => {
//   return (
// <ComposableMap
//   width={725}
//   height={700}
//   projection="geoAzimuthalEqualArea"
//   projectionConfig={{
//     rotate: [-90, -35, -10],
//     scale: 400
//   }}
// >
//       <Graticule stroke="#EAEAEC" />
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#9998A3"
//               stroke="#EAEAEC"
//             />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default MapChart;
