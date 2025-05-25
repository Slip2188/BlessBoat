import * as React from "react"
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg"
const SvgComponent = ({color="#000", ...props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 150.003 150"
    {...props}
  >
    <Defs>
      <ClipPath id="d" clipPathUnits="userSpaceOnUse">
        <Path
          d="M37.068 61.33h116.719v118.506H37.068Zm72.292 58.383a13.927 13.927 0 0 0-13.927-13.928 13.927 13.927 0 0 0-13.927 13.928 13.927 13.927 0 0 0 13.927 13.927 13.927 13.927 0 0 0 13.927-13.927z"
          className="powerclip"
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#9eb384",
            strokeWidth: 5.53955,
            strokeLinecap: "round",
            strokeDasharray: "none",
          }}
        />
      </ClipPath>
      <ClipPath id="c" clipPathUnits="userSpaceOnUse">
        <Path
          d="M37.1 61.3h116.656v118.566H37.099Zm72.26 58.413a13.927 13.927 0 0 0-13.927-13.928 13.927 13.927 0 0 0-13.927 13.928 13.927 13.927 0 0 0 13.927 13.927 13.927 13.927 0 0 0 13.927-13.927z"
          className="powerclip"
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#9eb384",
            strokeWidth: 5.53955,
            strokeLinecap: "round",
            strokeDasharray: "none",
          }}
        />
      </ClipPath>
      <ClipPath id="b" clipPathUnits="userSpaceOnUse">
        <Path
          d="M15.032 112.38h160.003v15.498H15.032Zm94.328 7.333a13.927 13.927 0 0 0-13.927-13.928 13.927 13.927 0 0 0-13.927 13.928 13.927 13.927 0 0 0 13.927 13.927 13.927 13.927 0 0 0 13.927-13.927z"
          className="powerclip"
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#9eb384",
            strokeWidth: 5.53955,
            strokeLinecap: "round",
            strokeDasharray: "none",
          }}
        />
      </ClipPath>
      <ClipPath id="a" clipPathUnits="userSpaceOnUse">
        <Path
          d="M87.032 39.28h16.2v160h-16.2Zm22.328 80.433a13.927 13.927 0 0 0-13.927-13.928 13.927 13.927 0 0 0-13.927 13.928 13.927 13.927 0 0 0 13.927 13.927 13.927 13.927 0 0 0 13.927-13.927z"
          className="powerclip"
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#9eb384",
            strokeWidth: 5.53955,
            strokeLinecap: "round",
            strokeDasharray: "none",
          }}
        />
      </ClipPath>
    </Defs>
    <G transform="translate(-20.032 -44.28)">
      <Circle
        cx={95.486}
        cy={119.733}
        r={57.335}
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.32914,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <Circle
        cx={95.486}
        cy={119.733}
        r={42.594}
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.29167,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <Path
        d="m94.674 46.922.916 144.715"
        clipPath="url(#a)"
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.28465,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <Path
        d="m22.674 120.236 144.718-.214"
        clipPath="url(#b)"
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.28465,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <Path
        d="m44.742 68.942 101.371 103.282"
        clipPath="url(#c)"
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.28465,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <Path
        d="M146.145 68.973 44.71 172.193"
        clipPath="url(#d)"
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.28465,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <Circle
        cx={95.486}
        cy={119.733}
        r={14.054}
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 5.29167,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </G>
  </Svg>
)
export default SvgComponent
