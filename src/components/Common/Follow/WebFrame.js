import WebFrameScreen from '../../../screens/Common/Follow/WebFrame'
import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'

const WebFrame = ({ route, navigation }) => {
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
        <WebFrameScreen onPress={onPress} uri={uri}/>
    )
}
export default WebFrame