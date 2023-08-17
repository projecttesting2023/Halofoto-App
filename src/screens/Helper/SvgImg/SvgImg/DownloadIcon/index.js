import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownloadIcon(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .75c.69 0 1.25.56 1.25 1.25v11.982l4.116-4.116a1.25 1.25 0 011.768 1.768l-6.25 6.25a1.25 1.25 0 01-1.768 0l-6.25-6.25a1.25 1.25 0 011.768-1.768l4.116 4.116V2c0-.69.56-1.25 1.25-1.25zM2 17c.69 0 1.25.56 1.25 1.25v2.5A1.25 1.25 0 004.5 22h15a1.25 1.25 0 001.25-1.25v-2.5a1.25 1.25 0 112.5 0v2.5a3.75 3.75 0 01-3.75 3.75h-15a3.75 3.75 0 01-3.75-3.75v-2.5C.75 17.56 1.31 17 2 17z"
        fill="#fff"
      />
    </Svg>
  )
}

export default DownloadIcon