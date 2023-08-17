import { createStackNavigator } from "@react-navigation/stack"
import { LOGIN, REGISTER, FACEBOOK_LOGIN, GOOGLE_LOGIN, APPLE_LOGIN, FORGOT_PASSWORD, OTP_VERIFICATION, RESET_PASSWORD, SOFTWARE_LICENSE} from "../constants/RouteNames"
import AppSettings from "../global/AppSettings"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import FacebookLogin from "../components/Auth/Login/FacebookLogin"
import GoogleLogin from "../components/Auth/Login/GoogleLogin"
import AppleLogin from "../components/Auth/Login/AppleLogin"
import ForgotPassword from "../components/Auth/ForgotPassword"
import OtpVerification from "../components/Auth/ForgotPassword/OtpVerification"
import ResetPassword from "../components/Auth/ForgotPassword/ResetPassword"
import SoftwareLicense from "../components/Common/Settings/SoftwareLicense"

const AuthStackNavigator = () => {
    const AuthTabStack = createStackNavigator()
    return (
        <AuthTabStack.Navigator>
            <AuthTabStack.Group
                screenOptions={{
                    headerShown: AppSettings.navigation_stack_header_visibility,
                }}
            >
                <AuthTabStack.Screen name={LOGIN} component={Login} />
                <AuthTabStack.Screen name={FACEBOOK_LOGIN} component={FacebookLogin} />
                <AuthTabStack.Screen name={GOOGLE_LOGIN} component={GoogleLogin} />
                <AuthTabStack.Screen name={APPLE_LOGIN} component={AppleLogin} />
                <AuthTabStack.Screen name={REGISTER} component={Register} />
                <AuthTabStack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
                <AuthTabStack.Screen name={OTP_VERIFICATION} component={OtpVerification} />
                <AuthTabStack.Screen name={RESET_PASSWORD} component={ResetPassword} />
                <AuthTabStack.Screen name={SOFTWARE_LICENSE} component={SoftwareLicense} />
            </AuthTabStack.Group>
        </AuthTabStack.Navigator>
    )
}
export default AuthStackNavigator