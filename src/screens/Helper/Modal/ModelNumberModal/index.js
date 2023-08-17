import { useState, useEffect, useCallback } from "react"
import {
    Text,
    Pressable,
    View,
    Modal,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    TextInput,
    Dimensions,
    useColorScheme,
} from "react-native"
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context"
import CloseIcon from "../../SvgImg/CloseIcon"
import StaticText from "../../../../global/StaticText"
import AppSettings from "../../../../global/AppSettings"
import Colors from "../../../../global/Colors"
import styles from "./style"
import Search from "../../SvgImg/Search"
import DownArrow from "../../SvgImg/DownArrow"

const ModelNumberModal = ({
    wrapperStyle,
    heading,
    value,
    fields,
    loadStatus,
    onSelect,
    style,
    error,
}) => {

    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark'

    const insets = useSafeAreaInsets()
    const [modalView, showModalView] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)
    const [listItems, setListItems] = useState([])

    const keyExtractor = useCallback(
        (item) =>
            typeof item?.id !== "undefined"
                ? item?.id
                : Math.floor(Math.random() * 999999),
        []
    )

    useEffect(() => {
        setListItems(fields)
    }, [loadStatus])

    const Item = ({ item }) => (
        <>
            {item?.model_no && (
                <View style={styles.countryItemWrap}>
                    <Pressable
                        style={[
                            styles.countryItemButtonWrap,
                            item?.model_no === selectedValue ? styles.countryItemActive : "",
                        ]}
                        onPress={() => {
                            showModalView(false)
                            setSelectedValue(null)
                            setListItems(fields)
                            return onSelect(item?.model_no)
                        }}
                    >
                        <Text style={[styles.countryItemLabel, isDarkTheme ? {
                            color: Colors.white
                        } :
                            { color: Colors.black }]}>{item?.model_no}  {item?.name}</Text>
                    </Pressable>
                </View>
            )}
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
                        { color: Colors.black}]}
                    placeholder={StaticText.modal.model_no.search.placeholder}
                    onChangeText={(value) => {
                        let filterResult =
                            fields?.length &&
                            fields.filter((data) =>
                                data.model_no.toLowerCase().includes(value.toLowerCase())
                            )
                        value?.length && filterResult?.length
                            ? setListItems(filterResult)
                            : setListItems({
                                model_no: null,
                            })
                        !value?.length && setListItems(fields)
                    }}
                    autoCapitalize={"words"}
                    keyboardType={"default"}
                    returnKeyType={"done"}
                />
                <Search />
            </View>
        </View>
    )

    return (
        <>
            {modalView && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalView}
                    onRequestClose={() => showModalView(!modalView)}
                >
                    <View style={[styles.modalWrap]}>
                        <ImageBackground
                            source={isDarkTheme ? '' : AppSettings.background_image}
                            style={[styles.modalBgWrap,
                                isDarkTheme
                                  ? { backgroundColor: 'black' }
                                  : { backgroundColor: 'white' },
                                ]}
                        >
                            <SafeAreaView style={[styles.containerWrap]}>
                                <View style={[styles.headerContent, { marginTop: insets.top }]}>
                                    {heading ? (
                                        <Text style={[styles.headerText, isDarkTheme ? {
                                            color: Colors.white
                                          } :
                                            { color: Colors.black }]}>{heading}</Text>
                                    ) : (
                                        ""
                                    )}
                                    <Pressable
                                        onPress={() => {
                                            setSelectedValue(null)
                                            setListItems(fields)
                                            showModalView(!modalView)
                                        }}
                                    >
                                        <CloseIcon />
                                    </Pressable>
                                </View>
                                <View style={[styles.cardWrap]}>
                                    {loadStatus ? (
                                        <ActivityIndicator
                                            size="large"
                                            color={Colors.royal_blue}
                                        />
                                    ) : (
                                        <FlatList
                                            data={Object.values(listItems)}
                                            renderItem={({ item }) => (
                                                <Item item={item} key={`p-model-${Math.random()}`} />
                                            )}
                                            keyExtractor={keyExtractor}
                                            initialNumToRender={10}
                                            ListHeaderComponent={renderHeader()}
                                            stickyHeaderIndices={[0]}
                                            showsVerticalScrollIndicator={false}
                                            keyboardShouldPersistTaps="handled"
                                            decelerationRate="fast"
                                            maxToRenderPerBatch={Dimensions.get('screen').height}
                                            windowSize={Dimensions.get('screen').height}
                                        />
                                    )}
                                </View>
                            </SafeAreaView>
                        </ImageBackground>
                    </View>
                </Modal>
            )}

            <View style={[wrapperStyle]}>
                <Text style={styles.inputSmall}>{StaticText.screen.warranty.step_1.form.model_no}</Text>
                <Pressable
                    style={[styles.pressableWrap, error && styles.errorWrap]}
                    onPress={() => {
                        setSelectedValue(null)
                        showModalView(!modalView)
                    }}
                >
                    <View style={styles.wrapText}>
                        <Text style={styles.textInput}>{value ? value : StaticText.screen.warranty.step_1.form.model_no}</Text>
                        <DownArrow />
                    </View>
                </Pressable>

                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </>
    )
}

export default ModelNumberModal