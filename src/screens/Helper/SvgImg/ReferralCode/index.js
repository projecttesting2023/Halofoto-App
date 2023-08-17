import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Path, Rect, Stop } from "react-native-svg";
import Colors from "../../../../global/Colors";

const ReferralCodeImg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="242"
      height="225"
      viewBox="0 0 242 225"
      fill="none"
    >
      <Path
        opacity="0.5"
        d="M101.853 41.1812C94.6939 49.1383 91.1462 59.9664 91.7542 70.6517C92.3622 81.337 96.3011 91.5623 101.112 101.137C105.31 109.507 110.328 119.024 106.891 127.726C104.972 132.601 100.6 136.212 95.7566 138.221C90.9135 140.23 85.6053 140.812 80.371 141.071C71.4463 141.52 62.3947 141.108 53.7132 143.202C45.0318 145.296 36.4772 150.466 33.1251 158.741C29.1862 168.49 33.6644 180.164 41.5793 187.096C49.4941 194.027 60.1318 196.998 70.5528 198.468C85.1929 200.525 100.087 200.012 114.552 196.951C126.136 194.487 137.541 190.316 146.994 183.162C156.442 176.014 163.818 165.704 165.843 154.035C167.868 142.366 163.94 129.466 154.687 122.064C150.843 118.987 146.206 116.882 142.828 113.292C139.449 109.702 137.742 103.717 140.856 99.9213C142.923 97.4099 146.407 96.638 149.643 96.252C165.531 94.3539 183.127 97.632 196.424 88.7126C204.032 83.6052 208.954 74.9237 210.038 65.8034C211.122 56.6831 209.155 46.8543 203.419 39.7061C187.827 20.2653 120.982 19.9163 101.847 41.1706L101.853 41.1812Z"
        fill="#E7EDFD"
      />
      <Rect
        x="68.2148"
        y="46.2891"
        width="88.7706"
        height="137.729"
        rx="8.1208"
        fill="#88A6F6"
      />
      <Rect
        x="79.5839"
        y="69.8389"
        width="65.7785"
        height="90.1409"
        rx="8.1208"
        fill="#E7EDFD"
      />
      <Path
        d="M148.915 78.5684C131.087 78.5684 116.635 93.0209 116.635 110.849C116.635 117.991 118.955 124.592 122.883 129.939L117.226 137.01C115.253 139.476 117.009 143.129 120.167 143.129H165.055C182.883 143.129 197.336 128.676 197.336 110.849C197.336 93.0209 182.883 78.5684 165.055 78.5684H148.915Z"
        fill="url(#paint0_linear_45_20795)"
      />
      <Path
        d="M159.248 127.58L171.636 115.27C171.674 115.239 171.711 115.205 171.746 115.17C172.728 114.202 173.501 113.042 174.015 111.761C174.529 110.479 174.775 109.105 174.735 107.725C174.696 106.344 174.374 104.986 173.787 103.737C173.201 102.487 172.364 101.372 171.329 100.462C170.294 99.5515 169.083 98.8654 167.771 98.4465C166.459 98.0276 165.075 97.8849 163.706 98.0273C162.337 98.1697 161.012 98.5941 159.814 99.274C159.192 99.6265 158.612 100.044 158.082 100.518C157.552 100.038 156.97 99.6153 156.346 99.2579C155.147 98.5707 153.819 98.1401 152.446 97.9931C151.073 97.8462 149.685 97.9861 148.368 98.404C147.052 98.8219 145.836 99.5088 144.797 100.422C143.758 101.334 142.919 102.453 142.332 103.707C141.745 104.961 141.423 106.324 141.387 107.709C141.35 109.094 141.6 110.471 142.121 111.755C142.64 113.036 143.417 114.195 144.404 115.16L156.902 127.58C157.552 128.226 158.599 128.226 159.248 127.58Z"
        fill="white"
      />
      <Rect
        x="103.134"
        y="52.7852"
        width="19.4899"
        height="8.93289"
        rx="4.46644"
        fill="url(#paint0_linear_45_20795)"
      />
      <Rect
        x="108.007"
        y="167.289"
        width="8.93289"
        height="8.93289"
        rx="4.46644"
        fill="url(#paint0_linear_45_20795)"
      />
      <Defs>
      <LinearGradient
                colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                id="paint0_linear_45_20795">
            </LinearGradient>
        {/* <LinearGradient id="paint0_linear_45_20795" x1="116.394" y1="78.5684" x2="179.338" y2="157.484" gradientUnits="userSpaceOnUse">
<Stop stopColor="#114EED"/>
<Stop offset="1" stopColor="#6A50E7"/>
</LinearGradient>
<LinearGradient id="paint1_linear_45_20795" x1="103.134" y1="52.7852" x2="109.901" y2="67.5494" gradientUnits="userSpaceOnUse">
<Stop stopColor="#114EED"/>
<Stop offset="1" stopColor="#6A50E7"/>
</LinearGradient>
<LinearGradient id="paint2_linear_45_20795" x1="108.007" y1="167.289" x2="116.94" y2="176.222" gradientUnits="userSpaceOnUse">
<Stop stopColor="#114EED"/>
<Stop offset="1" stopColor="#6A50E7"/>
</LinearGradient> */}
      </Defs>
    </Svg>
  );
};

export default ReferralCodeImg;
