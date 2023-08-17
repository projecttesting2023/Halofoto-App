import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarYellow(props) {
  return (
    <Svg
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.29 3.943l3.363-.514L5.16.22c.113-.24.506-.24.619 0l1.506 3.21 3.363.514a.342.342 0 01.193.576L8.398 7.023l.577 3.54a.342.342 0 01-.502.354l-3.004-1.66-3.003 1.66a.342.342 0 01-.503-.353l.578-3.54L.098 4.52a.342.342 0 01.192-.577z"
        fill="#FFB800"
      />
    </Svg>
  )
}

export default StarYellow
