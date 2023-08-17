import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ABOUT, FOLLOW, SETTINGS, AUTH_TAB_STACK_NAV } from "../constants/RouteNames"
import IcoHome from "../screens/Helper/SvgImg/Home"
import IcoAbout from "../screens/Helper/SvgImg/About"
// import IcoFollow from "../screens/Helper/SvgImg/Follow"
import IcoSettings from "../screens/Helper/SvgImg/Settings"
import AppSettings from "../global/AppSettings"
import AuthStackNavigator from "./AuthStackNavigator"
import Colors from '../global/Colors'
import About from "../components/Common/About"
// import Follow from "../components/Common/Follow"
import Settings from "../components/Common/Settings"
import styles from './TabBarStyle'

const AuthTabNavigator = () => {
    const AuthTab = createBottomTabNavigator()
    return (
        <AuthTab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name == AUTH_TAB_STACK_NAV) {
                    return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoHome /></View>)
                }
                if (route.name == ABOUT) {
                    return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoAbout /></View>)
                }
                // if (route.name == FOLLOW) {
                //     return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoFollow /></View>)
                // }
                if (route.name == SETTINGS) {
                    return (<View style={[styles.container, focused ? styles.containerFocused : styles.containerNormal]}><IcoSettings /></View>)
                }
            },
            headerShown: AppSettings.navigation_stack_header_visibility,
            tabBarStyle: { ...styles.tabBarContainer },
            tabBarLabelStyle: { ...styles.tabBarLabel },
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.grey,
        })} options={{ lazy: false }}>
            <AuthTab.Screen name={AUTH_TAB_STACK_NAV} component={AuthStackNavigator} />
            <AuthTab.Screen name={ABOUT} component={About} />
            <AuthTab.Screen name={SETTINGS} component={Settings}/>
            
        </AuthTab.Navigator>
    )
}
export default AuthTabNavigator