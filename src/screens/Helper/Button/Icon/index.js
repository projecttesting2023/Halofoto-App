import { View } from 'react-native'
import Google from '../../SvgImg/Google'
import Facebook from '../../SvgImg/Facebook'
import Apple from '../../SvgImg/Apple'

const Icon = ({
    icon,
    wrapperStyle
}) => {
    return (
        <View style={[wrapperStyle]}>
            {icon && icon === 'facebook' && <Facebook />}
            {icon && icon === 'google' && <Google />}
            {icon && icon === 'apple' && <Apple />}
        </View>
    )
}

export default Icon