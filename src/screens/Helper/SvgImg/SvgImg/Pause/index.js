import { Circle, Defs, G, Rect, Svg } from "react-native-svg";

const PauseIcon = ({ width, height }) => {
  return (
    <Svg width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_45_21602)">
        <Circle cx="12" cy="12" r="12" fill="#0082ED" />
        <Rect x="8" y="7" width="3" height="10" rx="1.5" fill="white" />
        <Rect x="13" y="7" width="3" height="10" rx="1.5" fill="white" />
      </G>
    </Svg>
  );
};

export default PauseIcon;
