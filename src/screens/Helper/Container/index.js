import { View } from 'react-native'
import styles from './style'

const Container = ({ style, children }) => {
    return (
        <View style={[styles.wrapper, style]}>
            {children}
        </View>
    )
}

export default Container