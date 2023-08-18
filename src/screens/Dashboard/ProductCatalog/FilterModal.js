import { useState } from "react"
import {
  Text,
  Pressable,
  View,
  Modal,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  useColorScheme
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import styles from "./filterModalStyle"
import StaticText from "../../../global/StaticText"
import RoundedCornerGradientStyleBlue from "../../Helper/Button/RoundedCornerGradientStyleBlue"
import DownArrow from "../../Helper/SvgImg/DownArrow"
import CloseIcon from "../../Helper/SvgImg/CloseIcon"
import Tick from "../../Helper/SvgImg/Tick"
import CheckBox from "../../Helper/SvgImg/CheckBox"
import AppSettings from "../../../global/AppSettings"
import TickSmall from "../../Helper/SvgImg/TickSmall"
import FilterBtn from "../../Helper/SvgImg/FilterBtn"
import Colors from "../../../global/Colors"
import CheckBoxTick from "../../Helper/SvgImg/CheckBoxTick"
import { SafeAreaView } from "react-native-safe-area-context"

const FilterModal = ({
  onSelect,
  filterData,
  filterLoading,
  onSubmitModal,
}) => {

  const theme = useColorScheme()
  const isDarkTheme = theme === 'dark'

  //console.log(Colors.white, 'isDarkThemeisDarkThemeisDarkTheme')
  const [modalView, showModalView] = useState(false)
  const [selectedCameraType, setSelectedCameraType] = useState([])
  const [selectedMountType, setSelectedMountType] = useState([])
  const [selectedLenseCategory, setSelectedLenseCategory] = useState([])

  const [selectedMessageType, setSelectedMessageType] = useState([])
  const [selectedDays, setSelectedDays] = useState(null)

  const selectAllMountData = () => {
    filterData?.mounts?.map(
      (data) =>
        !selectedMountType.includes(data?.id) &&
        setSelectedMountType((mountType) => [...mountType, data?.id])
    )
  }

  const selectAllLenseData = () => {
    filterData?.product_categories?.map(
      (data) =>
        !selectedLenseCategory.includes(data?.id) &&
        setSelectedLenseCategory((lenseCategory) => [
          ...lenseCategory,
          data?.id,
        ])
    )
  }

  // const selectAllMessageData = () => {
  //   filterData?.message_categories?.map(
  //     (data) =>
  //       !selectedMessageType.includes(data?.id) &&
  //       setSelectedMessageType((messageCategory) => [
  //         ...messageCategory,
  //         data?.id,
  //       ])
  //   )
  // }

  const resetData = () => {
    setSelectedCameraType([])
    setSelectedMountType([])
    setSelectedLenseCategory([])
    setSelectedMessageType([])
    setSelectedDays(null)
  }

  const submitFrmData = () => {
    showModalView(false)
    return onSubmitModal({
      camera_type: selectedCameraType,
      mount_type: selectedMountType,
      lense_category: selectedLenseCategory,
      message_type: selectedMessageType,
      days: selectedDays,
    })
  }

  return (
    <>
      {modalView && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalView}
          onRequestClose={() => {
            showModalView(!modalView)
          }}
        >

          <ScrollView>
            <View style={[styles.modalWrap]}>
              {/* <ImageBackground source={isDarkTheme ? AppSettings.background_inner_image_dark : AppSettings.background_image}> */}
              <LinearGradient colors={isDarkTheme ? ['#000000', '#000000', '#000000', '#000000'] : ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']} >
                <SafeAreaView style={styles.container}>
                  <View style={[styles.headerContent]}>
                    <Text style={[styles.headerText, { color: isDarkTheme ? Colors.white : Colors.black }]}>{StaticText.modal.product_type.filter}</Text>
                    <Pressable onPress={() => showModalView(!modalView)}>
                      <CloseIcon />
                    </Pressable>
                  </View>
                  {filterLoading ? (
                    <ActivityIndicator size="large" color={Colors.royal_blue} />
                  ) : (
                    <>
                      {filterData?.camera_types &&
                        filterData?.camera_types?.length > 0 && (
                          <View style={styles.mountTypedWrap}>
                            <Text style={[styles.headerText, { color: isDarkTheme ? Colors.white : Colors.black }]}>{StaticText.modal.product_type.camera_type}</Text>
                            <View style={styles.cardWrap}>
                              {filterData?.camera_types?.map((data) => (
                                <View
                                  style={[
                                    selectedCameraType.indexOf(data?.id) >= 0
                                      ? styles.activeCardWrap
                                      : ``,
                                  ]}
                                  key={`cam-type-${Math.random()}`}
                                >
                                  <Pressable
                                    style={[
                                      styles.genderCard,
                                      selectedCameraType.indexOf(data?.id) >=
                                      0 && styles.genderCardActive,
                                    ]}
                                    onPress={() => {
                                      if (
                                        selectedCameraType.includes(data?.id)
                                      ) {
                                        setSelectedCameraType([
                                          ...selectedCameraType.slice(
                                            0,
                                            selectedCameraType.indexOf(data?.id)
                                          ),
                                          ...selectedCameraType.slice(
                                            selectedCameraType.indexOf(
                                              data?.id
                                            ) + 1,
                                            selectedCameraType.length
                                          ),
                                        ])
                                      } else {
                                        setSelectedCameraType((cameraTypes) => [
                                          ...cameraTypes,
                                          data?.id,
                                        ])
                                      }
                                    }}
                                  >
                                    <Text style={[styles.cardText]}>
                                      {data?.name}
                                    </Text>
                                  </Pressable>
                                  {selectedCameraType.indexOf(data?.id) >=
                                    0 && (
                                      <View style={styles.iconWrap}>
                                        <TickSmall />
                                      </View>
                                    )}
                                </View>
                              ))}
                            </View>
                          </View>
                        )}

                      {filterData?.mounts && filterData?.mounts?.length > 0 && (
                        <>
                          <View style={styles.mountTypedWrap}>
                            <View style={styles.headerWrap}>
                              <Text style={[styles.headerText, { color: isDarkTheme ? Colors.white : Colors.black }]}>{StaticText.modal.product_type.mount}</Text>
                              <Pressable onPress={() => selectAllMountData()}>
                                <Text style={styles.selectText}>
                                  {StaticText.modal.product_type.select_all}
                                </Text>
                              </Pressable>
                            </View>
                            {filterData?.mounts?.map((data) => (
                              <Pressable
                                style={styles.checkBoxWrap}
                                onPress={() => {
                                  if (selectedMountType.includes(data?.id)) {
                                    setSelectedMountType([
                                      ...selectedMountType.slice(
                                        0,
                                        selectedMountType.indexOf(data?.id)
                                      ),
                                      ...selectedMountType.slice(
                                        selectedMountType.indexOf(data?.id) + 1,
                                        selectedMountType.length
                                      ),
                                    ])
                                  } else {
                                    setSelectedMountType((cameraTypes) => [
                                      ...cameraTypes,
                                      data?.id,
                                    ])
                                  }
                                }}
                                key={`mount-type-${Math.random()}`}
                              >
                                {selectedMountType.indexOf(data?.id) >= 0 ? (
                                  <CheckBoxTick color={isDarkTheme ? Colors.white : Colors.black} />
                                ) : (
                                  <CheckBox color={isDarkTheme ? Colors.white : Colors.black} />
                                )}
                                <Text style={[styles.textCategory, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                                  {data?.name}
                                </Text>
                              </Pressable>
                            ))}
                          </View>
                        </>
                      )}

                      {filterData?.product_categories &&
                        filterData?.product_categories?.length > 0 && (
                          <>
                            <View style={styles.mountTypedWrap}>
                              <View style={styles.headerWrap}>
                                <Text style={[styles.headerText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                                  {StaticText.modal.product_type.lense_category}
                                </Text>
                                <Pressable onPress={() => selectAllLenseData()}>
                                  <Text style={styles.selectText}>
                                    {StaticText.modal.product_type.select_all}
                                  </Text>
                                </Pressable>
                              </View>
                              {filterData?.product_categories?.map((data) => (
                                <Pressable
                                  style={styles.checkBoxWrap}
                                  onPress={() => {
                                    if (
                                      selectedLenseCategory.includes(data?.id)
                                    ) {
                                      setSelectedLenseCategory([
                                        ...selectedLenseCategory.slice(
                                          0,
                                          selectedLenseCategory.indexOf(
                                            data?.id
                                          )
                                        ),
                                        ...selectedLenseCategory.slice(
                                          selectedLenseCategory.indexOf(
                                            data?.id
                                          ) + 1,
                                          selectedLenseCategory.length
                                        ),
                                      ])
                                    } else {
                                      setSelectedLenseCategory(
                                        (cameraTypes) => [
                                          ...cameraTypes,
                                          data?.id,
                                        ]
                                      )
                                    }
                                  }}
                                  key={`mount-type-${Math.random()}`}
                                >
                                  {selectedLenseCategory.indexOf(data?.id) >=
                                    0 ? (
                                    <CheckBoxTick color={isDarkTheme ? Colors.white : Colors.black} />
                                  ) : (
                                    <CheckBox color={isDarkTheme ? Colors.white : Colors.black} />
                                  )}
                                  <Text style={[styles.textCategory, isDarkTheme ? { color: Colors.white } : { color: Colors.black }]}>
                                    {data?.name}
                                  </Text>
                                </Pressable>
                              ))}
                            </View>
                          </>
                        )}

                      {filterData?.message_categories &&
                        filterData?.message_categories?.length > 0 && (
                          <View style={styles.mountTypedWrap}>
                            <Text style={[styles.headerText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                              {StaticText.modal.message_list.category}
                            </Text>
                            <View style={styles.cardWrap}>
                              {filterData?.message_categories?.map((data) => (
                                <View
                                  style={[
                                    selectedMessageType.indexOf(data?.id) >= 0
                                      ? styles.activeCardWrap
                                      : ``,
                                  ]}
                                  key={`cam-type-${Math.random()}`}
                                >
                                  <Pressable
                                    style={[
                                      styles.genderCard,
                                      selectedMessageType.indexOf(data?.id) >=
                                      0 && styles.genderCardActive,
                                    ]}
                                    onPress={() => {
                                      if (
                                        selectedMessageType.includes(data?.id)
                                      ) {
                                        setSelectedMessageType([
                                          ...selectedMessageType.slice(
                                            0,
                                            selectedMessageType.indexOf(
                                              data?.id
                                            )
                                          ),
                                          ...selectedMessageType.slice(
                                            selectedMessageType.indexOf(
                                              data?.id
                                            ) + 1,
                                            selectedMessageType.length
                                          ),
                                        ])
                                      } else {
                                        setSelectedMessageType(
                                          (messageTypes) => [
                                            ...messageTypes,
                                            data?.id,
                                          ]
                                        )
                                      }
                                    }}
                                  >
                                    <Text style={[styles.cardText]}>
                                      {data?.name}
                                    </Text>
                                  </Pressable>
                                  {selectedMessageType.indexOf(data?.id) >=
                                    0 && (
                                      <View style={styles.iconWrap}>
                                        <TickSmall />
                                      </View>
                                    )}
                                </View>
                              ))}
                            </View>
                          </View>
                        )}

                      {filterData?.message_categories &&
                        filterData?.message_categories?.length > 0 && (
                          <View style={styles.mountTypedWrap}>
                            <Text style={[styles.headerText, { color: isDarkTheme ? Colors.white : Colors.black }]}>{StaticText.modal.message_list.date}</Text>
                            <View style={styles.cardWrap}>
                              <Pressable
                                style={
                                  selectedDays == 30
                                    ? [styles.genderCardButton, styles.genderCardActive]
                                    : styles.genderCardButton
                                }
                                onPress={() => {
                                  setSelectedDays(30)
                                }}
                              >
                                <Text style={[styles.cardText]}>
                                  {StaticText.modal.message_list.day_filter1}
                                </Text>
                              </Pressable>
                              <Pressable
                                style={
                                  selectedDays == 10
                                    ? [styles.genderCardButton, styles.genderCardActive]
                                    : styles.genderCardButton
                                }
                                onPress={() => {
                                  setSelectedDays(10)
                                }}
                              >
                                <Text style={[styles.cardText]}>
                                  {StaticText.modal.message_list.day_filter2}
                                </Text>
                              </Pressable>
                            </View>
                          </View>
                        )}

                      <View style={[styles.buttonWrap]}>
                        <RoundedCornerGradientStyleBlue
                          label={StaticText.button.review}
                          onPress={resetData}
                        />
                        <RoundedCornerGradientStyleBlue
                          label={StaticText.button.use_filter}
                          onPress={submitFrmData}
                        />
                      </View>
                    </>
                  )}
                </SafeAreaView>
              </LinearGradient>
              {/* </ImageBackground> */}
            </View>
          </ScrollView>
        </Modal>
      )}
      <View style={styles.fileIco}>
        <Pressable onPress={() => showModalView(!modalView)}>
          <FilterBtn />
        </Pressable>
      </View>
    </>
  )
}

export default FilterModal
