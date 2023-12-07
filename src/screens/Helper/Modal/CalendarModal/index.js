import { useState } from 'react'
import { Text, Pressable, View, Platform, Modal } from 'react-native'
import moment from "moment"
import RNDateTimePicker from '@react-native-community/datetimepicker'
import styles from './style'
import Calendar from '../../SvgImg/Calendar'
import CloseIcon from '../../SvgImg/CloseIcon'
import Colors from '../../../../global/Colors'

const CalendarModal = ({
    heading,
    value,
    onSelect,
    style,
    labeStyle,
    error
}) => {
    const MIN_DATE = new Date(1930, 0, 1)
    const MAX_DATE = new Date()
    const [modalView, showModalView] = useState(false)
    const [selectedDate, setSelectedDate] = useState(MAX_DATE)
    //console.log(value, 'tttttttt')
    if (!!value) {
        const date1 = value.split('-')
        if (date1[0].length > 2) {
            value = date1[2] + '-' + date1[1] + '-' + date1[0]
        }
        //console.log(value, 'uuuuuuuu')
    }

    return (
        <>
            {Platform.OS === 'ios' ?
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalView}
                >
                    <View style={[styles.modalWrap]}>
                        <View style={[styles.container]}>
                            <View style={[styles.headerContent]}>
                                {heading ? <Text style={[styles.headerText]}>{heading}</Text> : ''}
                                <Pressable onPress={() => {
                                    showModalView(!modalView)
                                }}><CloseIcon /></Pressable>
                            </View>
                            <View style={[styles.cardWrap]}>
                                <RNDateTimePicker
                                    mode="date"
                                    display='spinner'
                                    value={selectedDate}
                                    textColor={Colors.black}
                                    minimumDate={MIN_DATE}
                                    maximumDate={MAX_DATE}
                                    onChange={(event, selectedDate) => {
                                        // console.log(moment(selectedDate).format("DD-MM-YYYY"),'fgfg')
                                         setSelectedDate(selectedDate)                                                       
                                         event.type == 'set' && onSelect(moment(selectedDate).format("DD-MM-YYYY"))
                    
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                :
                (modalView &&
                    <RNDateTimePicker
                        mode="date"
                        value={selectedDate}
                        minimumDate={MIN_DATE}
                        maximumDate={MAX_DATE}
                        onChange={(event, selectedDate) => {
                            showModalView(!modalView)
                            event.type == 'set' && onSelect(moment(selectedDate).format("DD-MM-YYYY"))

                        }}
                    />
                )
            }
            <View style={[style.inputWrapModal]}>
                <View style={[style.inputWrapp, error && styles.errorWrap]}>
                    {heading?.length && <Text style={labeStyle}>{heading}</Text>}
                    <View style={[style.input]}>
                        <Pressable style={!!style?.inputWrappCalender ? style?.inputWrappCalender : styles.inputWrapp} onPress={() => showModalView(!modalView)}>
                            <Text style={[styles.inputTxt]}>{value}</Text>
                            <Calendar />
                        </Pressable>
                    </View>
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </>
    )
}

export default CalendarModal