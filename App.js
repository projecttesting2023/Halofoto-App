import 'react-native-gesture-handler'
import {LogBox} from 'react-native'
import GlobalProvider from "./src/context/Provider"
import AppNavContainer from "./src/navigations"

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
      <GlobalProvider>
        <AppNavContainer />
      </GlobalProvider>
    </>

  )
}