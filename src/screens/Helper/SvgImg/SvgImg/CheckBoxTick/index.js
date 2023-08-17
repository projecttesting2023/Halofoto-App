import Svg, { Path, Rect } from "react-native-svg";

const CheckBoxTick = ({ color }) => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="0.5"
        y="0.5"
        width="17"
        height="17"
        rx="4.5"
        fill={color ? color : ''}
        stroke={color ? color : `#0082ED`}
      />
      <Path
        d="M13.8332 6.25L7.87484 12.2083L5.1665 9.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CheckBoxTick;
