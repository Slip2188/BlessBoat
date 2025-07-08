import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 99.364 99.259"
    {...props}
  >
    <G
      style={{
        fill: "#9f8383",
        fillOpacity: 1,
        stroke: "none",
      }}
      transform="translate(-29.54 -51.356)"
    >
      <Rect
        width={26.986}
        height={99.24}
        x={123.505}
        y={-128.963}
        ry={6.409}
        style={{
          fill: "#9f8383",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 5.292,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
        }}
        transform="rotate(90.026)"
      />
      <Rect
        width={26.986}
        height={99.24}
        x={29.742}
        y={51.305}
        ry={6.409}
        style={{
          fill: "#9f8383",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 5.292,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
        }}
        transform="rotate(.08)"
      />
    </G>
    <Path
      d="M106.321 123.852c.217-27.347-23.64-49.616-49.743-50l-.255 49.89z"
      style={{
        fill: "#9f8383",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: ".254228px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-29.54 -51.356)"
    />
    <G
      style={{
        stroke: "#4b352a",
        strokeWidth: 14.1577,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <Path
        d="m40.084 4.916-.168 70.168M4.882 39.882l70.236.236"
        style={{
          fill: "none",
          stroke: "#4b352a",
          strokeWidth: 14.1577,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="matrix(.35747 0 0 .35747 27.565 41.413)"
      />
    </G>
  </Svg>
)
export default SvgComponent
