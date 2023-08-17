import SettingsWebFrameScreen from '../../../screens/Common/Settings/SettingsWebFrame'
import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'

const SettingsWebFrame = ({ route, navigation }) => {
    const [uri, setUri] = useState('')
    const onPress = (route) => navigation.navigate(route)
    const IsFocused = useIsFocused()

    useEffect(() => {
        if(IsFocused){
            let {uri} = route.params
            setUri(uri)
        }else{
            setUri('')
        }
    }, [IsFocused])
    
    return (
        <SettingsWebFrameScreen onPress={onPress} uri={uri}/>
    )
}
export default SettingsWebFrame