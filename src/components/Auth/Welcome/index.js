import { useNavigation } from '@react-navigation/native'
import { AUTH_TAB_NAV } from '../../../constants/RouteNames'
import WelcomeScreen from '../../../screens/Auth/Welcome'


const Welcome = () => {
  const { navigate } = useNavigation()
  const onPress = () => navigate(AUTH_TAB_NAV)

  return (
    <WelcomeScreen onPress={onPress} />
  )
}

export default Welcome