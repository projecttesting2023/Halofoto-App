import { useEffect, useContext } from 'react'
import { useIsFocused } from '@react-navigation/native'
import ThankYouScreen from '../../../screens/Dashboard/ProductRegistration/ThankYou'
import { DASHBOARD, MY_PRODUCT_LIST } from '../../../constants/RouteNames'
import { GlobalContext } from '../../../context/Provider'
import { hideNavigation } from '../../../context/actions/common/manageNavigation'

const ThankYou = ({ route, navigation }) => {
    const { navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const isFocused = useIsFocused()
    const { approvalStatus, pointsAccumulate } = route.params
    const onPress = () => approvalStatus != 'accept' ? navigation.navigate(DASHBOARD) : navigation.navigate(MY_PRODUCT_LIST, {
        index: 0,
        animated: true,
    })

    useEffect(() => {
        isFocused && hideNavigation()(navigationDispatch)
    }, [isFocused])


    return (
        <ThankYouScreen
            onPress={onPress}
            approvalStatus={approvalStatus}
            pointsAccumulate={pointsAccumulate}
        />
    )
}
export default ThankYou