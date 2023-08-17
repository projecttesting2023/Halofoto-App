import Svg, {
  G,
  Ellipse,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

const Tick = () => {
  return (
    <Svg
      width={272}
      height={252}
      viewBox="0 0 272 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_45_20875)">
        <Ellipse
          cx={136}
          cy={126}
          rx={76.6711}
          ry={76.6956}
          fill="url(#paint0_linear_45_20875)"
        />
      </G>
      <Circle
        cx={120.188}
        cy={112.067}
        r={46.2886}
        fill="url(#paint1_linear_45_20875)"
      />
      <Path
        d="M175.248 107.683L165.199 97.6953L122.963 139.671L106.801 123.745L96.7517 133.733L112.777 149.794L122.963 159.782L133.012 149.794L175.248 107.683Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_45_20875"
          x1={59.3289}
          y1={49.3047}
          x2={212.72}
          y2={202.647}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#114EED" />
          <Stop offset={1} stopColor="#6A50E7" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_45_20875"
          x1={73.8994}
          y1={65.7783}
          x2={166.477}
          y2={158.355}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#114EED" />
          <Stop offset={1} stopColor="#6A50E7" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Tick
