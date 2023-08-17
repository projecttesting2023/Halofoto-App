import { Pressable, Text, ActivityIndicator } from 'react-native'
import AppSettings from '../../../../global/AppSettings'
import styles from './style'

const Submit = ({
    onPress,
    label,
    labelStyle,
    btnStyle,
    disabled,
    showLoader
}) => {
    return (
        <Pressable style={[btnStyle]} onPress={onPress} disabled={disabled ? disabled : false}>
            <Text style={[labelStyle]}>
                {label}
            </Text>
            {showLoader && <ActivityIndicator size="small" color={AppSettings.activity_indicator_color} />}
        </Pressable>
    )
}

export default Submit