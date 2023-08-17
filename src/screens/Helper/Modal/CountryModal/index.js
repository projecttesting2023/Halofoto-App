import { useState, useEffect, useCallback } from 'react'
import { Text, Pressable, View, Modal, FlatList, ImageBackground, ActivityIndicator, TextInput, Dimensions, useColorScheme } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import CloseIcon from '../../SvgImg/CloseIcon'
import StaticText from '../../../../global/StaticText'
import AppSettings from '../../../../global/AppSettings'
import Colors from '../../../../global/Colors'
import styles from './style'
import Search from '../../SvgImg/Search'
import DownArrow from '../../SvgImg/DownArrow'

const CountryModal = ({
    heading,
    value,
    fields,
    loadStatus,
    onSelect,
    displayList,
    style,
    error
}) => {

    const theme = useColorScheme()
    const isDarkTheme = theme === 'dark'

    const insets = useSafeAreaInsets()
    const [modalView, showModalView] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        setListItems(fields)
    }, [loadStatus])

    useEffect(() => {
        if (modalView == true && (displayList == 'state' || displayList == 'city')) {
            setListItems(fields)
        }
    }, [modalView])

    const keyExtractor = useCallback(item => typeof item?.id !== 'undefined' ? item?.id : Math.floor(Math.random() * 999999), [])

    const Item = ({ item }) => (
        <>
            {(item?.name || item?.province_name || item?.city_name) && <View style={styles.countryItemWrap}>
                <Pressable style={[styles.countryItemButtonWrap, item?.id === selectedValue ? styles.countryItemActive : '']} onPress={() => {
                    setSelectedValue(null)
                    // setSelectedValue(item?.id)
                    showModalView(false)
                    setListItems(fields)
                    return onSelect({ id: item?.id, name: displayList == 'state' ? item?.province_name : (displayList == 'city' ? item?.city_name : item?.name), childrens: displayList == 'state' ? item?.cities : '' })
                }}>
                    <Text style={[styles.countryItemLabel, isDarkTheme ? {
                        color: Colors.white
                    } :
                        { color: Colors.black }]}>{displayList == 'state' ? item?.province_name : (displayList == 'city' ? item?.city_name : item?.name)}</Text>
                </Pressable>
            </View>}
        </>
    )

    const renderHeader = () => (
        <View style={[styles.modalHeaderWrap, isDarkTheme ? {
            backgroundColor: Colors.black
          } :
            { backgroundColor: Colors.white}]}>
            <View style={[styles.searchWrap]}>
                <TextInput
                    style={[styles.countryItemLabel, isDarkTheme ? {
                        color: Colors.white
                    } :
                        { color: Colors.black }]}
                    placeholder={StaticText.modal.country_ext_code.search.placeholder}
                    placeholderTextColor={isDarkTheme ? Colors.white: Colors.black}
                    onChangeText={value => {
                        let filterResult = ''
                        filterResult = fields?.length && fields.filter(data => displayList == 'state' ? data.province_name.toLowerCase().includes(value.toLowerCase()) : (displayList == 'city' ? data.city_name.toLowerCase().includes(value.toLowerCase()) : data.name.toLowerCase().includes(value.toLowerCase())))
                        value?.length && filterResult?.length ? setListItems(filterResult) : setListItems({ id: null, name: null })
                        !value?.length && setListItems(fields)
                    }}
                    autoCapitalize={'words'}
                    keyboardType={'default'}
                    returnKeyType={'done'}
                />
                <Search />
            </View>
        </View>
    )

    return (
        <>
            {modalView && <Modal
                animationType="slide"
                transparent={true}
                visible={modalView}
            //onRequestClose={() => showModalView(!modalView)}
            >
                <View style={[styles.modalWrap]}>
                    <ImageBackground source={isDarkTheme ? AppSettings.background_inner_image_dark : AppSettings.background_image} style={styles.modalBgWrap}>
                        <SafeAreaView style={[styles.containerWrap]}>
                            <View style={[styles.headerContent, { marginTop: insets.top }]}>
                                {heading ? <Text style={[styles.headerText, isDarkTheme ? {
                                    color: Colors.white
                                } :
                                    { color: Colors.black }]}>{heading}</Text> : ''}
                                <Pressable onPress={() => {
                                    setSelectedValue(null)
                                    setListItems(fields)
                                    showModalView(!modalView)
                                }}><CloseIcon /></Pressable>
                            </View>
                            <View style={[styles.cardWrap]}>
                                {loadStatus ? <ActivityIndicator size='large' color={Colors.royal_blue} /> :
                                    <FlatList
                                        data={Object.values(listItems)}
                                        renderItem={({ item }) => <Item item={item} key={item?.id} />}
                                        keyExtractor={keyExtractor}
                                        initialNumToRender={10}
                                        ListHeaderComponent={renderHeader()}
                                        stickyHeaderIndices={[0]}
                                        showsVerticalScrollIndicator={false}
                                        keyboardShouldPersistTaps='handled'
                                        decelerationRate="fast"
                                        maxToRenderPerBatch={Dimensions.get('screen').height}
                                        windowSize={Dimensions.get('screen').height}
                                    />
                                }
                            </View>
                        </SafeAreaView>
                    </ImageBackground>
                </View>
            </Modal>}
            <View style={styles.inputWrapModal}>
                <View style={[style.inputWrapp, error && styles.errorWrap]}>
                    {heading?.length && <Text style={[style.labelText]}>{heading}</Text>}
                    <View style={[style.input]}>
                        <Pressable style={[style.inputCountry, styles.inputWrapp]} onPress={() => {
                            setSelectedValue(null)
                            showModalView(!modalView)
                        }
                        }>
                            <Text style={[style.inputTxt]}>{value}</Text>
                            <DownArrow />
                        </Pressable>
                    </View>
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </>
    )
}

export default CountryModal