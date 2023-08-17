import Svg, { Ellipse, G, Path } from "react-native-svg";

const TickGreen = (color) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="28" height="28" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"  class=""><G><Ellipse cx="256" cy="256" rx="256" ry="255.832" style="" fill={color ? '#32bea6': "#fff" }data-original="#32bea6" class=""></Ellipse><Path d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z" style="" fill={color ? '#fff':"#000"} data-original="#ffffff" class=""></Path></G></Svg>
  );
};

export default TickGreen;
