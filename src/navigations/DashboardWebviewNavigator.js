import { createStackNavigator } from "@react-navigation/stack"
import * as RouteNames from "../constants/RouteNames"
import AppSettings from '../global/AppSettings'
import Follow from "../components/Common/Follow"
import WebFrame from "../components/Common/Follow/WebFrame"

const DashboardWebviewNavigator = () => {
    const DashboardStack = createStackNavigator()
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Group
                screenOptions={{
                    headerShown: AppSettings.navigation_stack_header_visibility,
                }}
            >
                <DashboardStack.Screen name={RouteNames.DASHBOARD_WEBVIEW_MAIN} component={Follow} />
                <DashboardStack.Screen name={RouteNames.WEB_FRAME} component={WebFrame} />
            </DashboardStack.Group>
        </DashboardStack.Navigator>
    )
}
export default DashboardWebviewNavigator