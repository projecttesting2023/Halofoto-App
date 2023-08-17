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

const CountryExtCodeModal = ({
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
      {item?.name && (
        <View style={styles.countryItemWrap}>
          <Pressable
            style={[
              styles.countryItemButtonWrap,
              item?.code === selectedValue ? styles.countryItemActive : "",
            ]}
            onPress={() => {
              showModalView(false)
              setSelectedValue(null)
              setListItems(fields)
              return onSelect({ ext_code: item?.ext_code, code: item?.code })
            }}
          >
            <Text style={[styles.countryItemLabel,isDarkTheme ? {
            color: Colors.white
          } :
            { color: Colors.black}]}>
              {item?.name} - {item?.ext_code}
            </Text>
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
          placeholder={StaticText.modal.country_ext_code.search.placeholder}
          placeholderTextColor={isDarkTheme ? Colors.white: Colors.black}
          onChangeText={(value) => {
            let filterResult =
              fields?.length &&
              fields.filter((data) =>
                data.name.toLowerCase().includes(value.toLowerCase())
              )
            value?.length && filterResult?.length
              ? setListItems(filterResult)
              : setListItems({
                code: null,
                countrycode: null,
                ext_code: null,
                id: null,
                name: null,
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
              source={isDarkTheme ? AppSettings.background_inner_image_dark : AppSettings.background_image} style={styles.modalBgWrap}>
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
                        <Item item={item} key={item?.id} />
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
        <Pressable
          style={[styles.pressableWrap, error && styles.errorWrap]}
          onPress={() => {
            setSelectedValue(null)
            showModalView(!modalView)
          }}
        >
          <Text style={[styles.inputSmall]}>{value}</Text>
          <DownArrow />
        </Pressable>

        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </>
  )
}

export default CountryExtCodeModal
