import 'react-native-gesture-handler'
import {LogBox} from 'react-native'
import GlobalProvider from "./src/context/Provider"
import AppNavContainer from "./src/navigations"

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);
export default function App() {
  return (
    <>
      <GlobalProvider>
        <AppNavContainer />
      </GlobalProvider>
    </>

  )
}