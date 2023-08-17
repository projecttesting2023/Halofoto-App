import { useState } from 'react'
import { Text, Pressable, View, Modal,useColorScheme } from 'react-native'
import CloseIcon from '../../SvgImg/CloseIcon'
import styles from './style'
import Colors from "../../../../global/Colors"
import StaticText from '../../../../global/StaticText'
import RoundedCornerGradientStyleBlue from '../../Button/RoundedCornerGradientStyleBlue'
import DownArrow from '../../SvgImg/DownArrow'


const RadioModalSmall = ({
    wrapperStyle,
    heading,
    value,
    fields,
    onSelect,
    style,
    error,
}) => {

    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark'
    const [modalView, showModalView] = useState(false)
    const [slectedValue, setSlectedValue] = useState(null)
   
    return (
        <>
            {modalView && <Modal
                animationType="slide"
                transparent={true}
                visible={modalView}
                onRequestClose={() => {
                    showModalView(!modalView);
                }}>
                <View style={[styles.modalWrap]}>
                    <View style={[styles.container,isDarkTheme ? {backgroundColor: Colors.black} :{ backgroundColor: Colors.white}]}>
                        <View style={[styles.headerContent]}>
                            {heading ? <Text style={[styles.headerText,,{color: isDarkTheme ? Colors.white:  Colors.black }]}>{heading}</Text> : ''}
                            <Pressable onPress={() => showModalView(!modalView)}><CloseIcon /></Pressable>
                        </View>
                        <View style={[styles.cardWrap]}>
                            {fields?.length && fields.map(field =>
                                <Pressable style={[styles.genderCard, slectedValue === field.value ? styles.genderCardActive : '']} onPress={() => setSlectedValue(field.value)} key={field.value}>
                                    <Text style={[styles.cardText,{color: isDarkTheme ? Colors.black:  Colors.black }]}>{field.label}</Text>
                                </Pressable>
                            )}
                        </View>
                        <View style={[styles.buttonWrap]}>
                            <RoundedCornerGradientStyleBlue label={StaticText.button.review} onPress={() => setSlectedValue(null)} />
                            <RoundedCornerGradientStyleBlue label={StaticText.button.use_filter} onPress={() => {
                                setSlectedValue(null)
                                showModalView(!modalView)
                                return onSelect(slectedValue)
                            }} />
                        </View>

                    </View>
                </View>
            </Modal>}
            <View style={styles.inputWrapModal}>
                <View style={[style.inputWrapp, error && styles.errorWrap]}>
                    {heading.length && <Text style={[style.labelText]}>{heading}</Text>}
                    <View style={[style.input]}>
                        <Pressable style={ styles.inputWrapp } onPress={() => showModalView(!modalView)}>
                            <Text style={[styles.inputTxt]}>{value}</Text>
                            <DownArrow />
                        </Pressable>
                    </View>
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </>
    )
}

export default RadioModalSmall