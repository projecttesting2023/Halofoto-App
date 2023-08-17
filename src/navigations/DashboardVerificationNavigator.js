import { createStackNavigator } from "@react-navigation/stack";
import { OTP_VERIFICATION, CHECK_REFERRAL_GENERAL_USER, DASHBOARD_WELCOME_GENERAL_USER } from "../constants/RouteNames"
import AppSettings from "../global/AppSettings"
import OTPVerification from "../components/Dashboard/OTPVerification"
import CheckReferrer from "../components/Dashboard/CheckReferrer"
import Welcome from "../components/Dashboard/Welcome"

const DashboardVerificationNavigator = () => {
  const DashboardVerificationStack = createStackNavigator()

  return (
      <DashboardVerificationStack.Navigator>
        <DashboardVerificationStack.Group
          initialRouteName={OTP_VERIFICATION}
          screenOptions={{
            headerShown: AppSettings.navigation_stack_header_visibility,
          }}
        >
          <DashboardVerificationStack.Screen name={OTP_VERIFICATION} component={OTPVerification} />
          <DashboardVerificationStack.Screen name={CHECK_REFERRAL_GENERAL_USER} component={CheckReferrer} />
          <DashboardVerificationStack.Screen name={DASHBOARD_WELCOME_GENERAL_USER} component={Welcome} />
        </DashboardVerificationStack.Group>
      </DashboardVerificationStack.Navigator>
  )
}
export default DashboardVerificationNavigator