import { createStackNavigator } from "@react-navigation/stack"
import { WELCOME, AUTH_TAB_NAV } from "../constants/RouteNames"

import AppSettings from "../global/AppSettings"
import Welcome from "../components/Auth/Welcome"
import AuthTabNavigator from "./AuthTabNavigator"

const AuthWelcomeNavigator = () => {
  const AuthStack = createStackNavigator()

  return (
    <AuthStack.Navigator>
      <AuthStack.Group
        screenOptions={{
          headerShown: AppSettings.navigation_stack_header_visibility,
        }}
      >
        <AuthStack.Screen name={WELCOME} component={Welcome} />
        <AuthStack.Screen name={AUTH_TAB_NAV} component={AuthTabNavigator} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  )
}

export default AuthWelcomeNavigator
