import * as React from "react"
import Svg, { Defs, ClipPath, Path } from "react-native-svg"
const SvgComponent = ({color="#000", ...props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.521 185.208"
    {...props}
  >
    <Defs>
      <ClipPath id="a" clipPathUnits="userSpaceOnUse">
        <Path
          d="M3.545-4.872h29.313v130H3.545Zm4.878 125.157 19.56-.04-9.872-9.685z"
          className="powerclip"
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".214251px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
      </ClipPath>
    </Defs>
    <Path
      d="M8.545.128h19.313v120H8.545Z"
      clipPath="url(#a)"
      style={{
        fill: color,
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.547204,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      transform="matrix(.95894 0 0 1.5434 -8.194 -.197)"
    />
  </Svg>
)
export default SvgComponent
