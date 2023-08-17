import { createStackNavigator } from "@react-navigation/stack";
import {  CHECK_REFERRAL_SOCIAL_USER, DASHBOARD_WELCOME_SOCIAL_USER } from "../constants/RouteNames"
import AppSettings from "../global/AppSettings"

import CheckReferrer from "../components/Dashboard/CheckReferrer"
import Welcome from "../components/Dashboard/Welcome"

const DashboardReferrerNavigator = () => {
  const DashboardVerificationStack = createStackNavigator()

  return (
      <DashboardVerificationStack.Navigator>
        <DashboardVerificationStack.Group
          initialRouteName={CHECK_REFERRAL_SOCIAL_USER}
          screenOptions={{
            headerShown: AppSettings.navigation_stack_header_visibility,
          }}
        >
          <DashboardVerificationStack.Screen name={CHECK_REFERRAL_SOCIAL_USER} component={CheckReferrer} initialParams={{ userType: 'social' }} />
          <DashboardVerificationStack.Screen name={DASHBOARD_WELCOME_SOCIAL_USER} component={Welcome} />
        </DashboardVerificationStack.Group>
      </DashboardVerificationStack.Navigator>
  )
}
export default DashboardReferrerNavigator