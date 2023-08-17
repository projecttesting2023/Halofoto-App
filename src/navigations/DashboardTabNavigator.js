import React, { useContext } from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GlobalContext } from '../context/Provider'
import { DASHBOARD_TAB_STACK_NAV, ABOUT, DASHBOARD_TAB_WEBVIEW_NAV, SETTINGS } from "../constants/RouteNames"
import IcoHome from "../screens/Helper/SvgImg/Home"
import IcoAbout from "../screens/Helper/SvgImg/About"
import IcoFollow from "../screens/Helper/SvgImg/Follow"
import IcoSettings from "../screens/Helper/SvgImg/Settings"
import AppSettings from '../global/AppSettings'
import Colors from '../global/Colors'
import DashboardStackNavigator from './DashboardStackNavigator'
import About from "../components/Common/About"
import Settings from "../components/Common/Settings"
import styles from './TabBarStyle'
import DashboardWebviewNavigator from './DashboardWebviewNavigator'


const DashboardTabNavigator = () => {
    const { navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const DashboardTabStack = createBottomTabNavigator()
    return (
        <DashboardTabStack.Navigator>
            <DashboardTabStack.Group screenOptions={({ route }) => ({
                headerShown: AppSettings.navigation_stack_header_visibility,
                tabBarIcon: ({ focused, color, size }) => {

                    if (route.name == DASHBOARD_TAB_STACK_NAV) {
                        return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoHome /></View>)
                    }
                    if (route.name == ABOUT) {
                        return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoAbout /></View>)
                    }
                    if (route.name == DASHBOARD_TAB_WEBVIEW_NAV) {
                        return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoFollow /></View>)
                    }
                    if (route.name == SETTINGS) {
                        return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoSettings /></View>)
                    }
                },
                tabBarStyle: { ...styles.tabBarContainer },
                tabBarLabelStyle: { ...styles.tabBarLabel },
                tabBarActiveTintColor: Colors.white,
                tabBarInactiveTintColor: Colors.grey,
            })} options={{ lazy: false }}>
                {!display ? <DashboardTabStack.Screen name={DASHBOARD_TAB_STACK_NAV} component={DashboardStackNavigator} options={{
                    tabBarStyle: { display: "none" }
                }} /> : <DashboardTabStack.Screen name={DASHBOARD_TAB_STACK_NAV} component={DashboardStackNavigator} />}

                <DashboardTabStack.Screen name={ABOUT} component={About} />
                <DashboardTabStack.Screen name={DASHBOARD_TAB_WEBVIEW_NAV} component={DashboardWebviewNavigator} />
                <DashboardTabStack.Screen name={SETTINGS} component={Settings} />
               
            </DashboardTabStack.Group>
        </DashboardTabStack.Navigator>
    )
}
export default DashboardTabNavigator