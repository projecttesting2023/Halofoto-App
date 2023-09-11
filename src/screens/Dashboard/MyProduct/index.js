import React, { useCallback } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import { DASHBOARD } from "../../../constants/RouteNames";
import AppSettings from "../../../global/AppSettings";
import Colors from "../../../global/Colors";
import StaticText from "../../../global/StaticText";
import BackBtn from "../../Helper/SvgImg/BackBtn";
import MyProductNoList from "./MyProductNoList";
import ProductList from "./ProductList";
import styles from "./style";
import VideoModal from "../../Helper/Modal/VideoModal";
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";

const MyProduct = ({
  data,
  loading,
  onPress,
  onPressRegister,
  currentSlideIndex,
  setCurrentSlideIndex,
  screenWidth,
  sliderRef,
  onPressSlide,
  onPressTab,
  videoModal,
  showVideoModal,
  videoProp,
  navMenus,
}) => {
  const keyExtractor = useCallback(
    (item) => item.warranty_details.id.toString(),
    []
  );
  const renderItem = useCallback(
    ({ item }) => (
      <ProductList
        item={item}
        onPress={onPress}
        onPressTab={onPressTab}
        navMenus={navMenus}
      />
    ),
    []
  );

  return (
    <>
      {videoModal && (
        <VideoModal
          videoProp={videoProp}
          showVideoModal={showVideoModal}
          showModal={videoModal}
        />
      )}
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView>
          <ScrollView>
          <View style={styles.topHeader}>
            <Pressable
              style={styles.titleHolder}
              onPress={() => onPress(DASHBOARD)}
            >
              <View style={styles.backWrap}>
                <BackBtn />
              </View>
              <Text style={styles.pageHeading}>
                {StaticText.screen.my_product_list.heading}
              </Text>
            </Pressable>
          </View>
          {!loading && data?.length && (
            <View style={styles.arrowWrap}>
              <Pressable
                style={[styles.prevButtonWrap]}
                onPress={() => onPressSlide("prev")}
              >
                {currentSlideIndex > 0 ? (
                  <BackBtn />
                ) : (
                  <BackBtn color={"rgba(211, 212, 213, 0.2)"} />
                )}
              </Pressable>
              <Pressable
                style={[styles.nxtButtonWrap]}
                onPress={() => onPressSlide("next")}
              >
                {currentSlideIndex < data?.length - 1 ? (
                  <BackBtn />
                ) : (
                  <BackBtn color={"rgba(211, 212, 213, 0.2)"} />
                )}
              </Pressable>
            </View>
          )}
          {loading ? (
            <View style={styles.bannerMainWrap}>
              <ActivityIndicator size="large" color={Colors.royal_blue} />
            </View>
          ) : data?.length ? (
            <View style={styles.bannerMainWrap}>
              <FlatList
                pagingEnabled
                horizontal
                onScroll={(e) => {
                  setCurrentSlideIndex(
                    (e.nativeEvent.contentOffset.x / screenWidth).toFixed(0)
                  );
                }}
                data={data}
                ref={sliderRef}
                showsHorizontalScrollIndicator={false}
                scrollEnabled
                scrollEventThrottle={16}
                estimatedItemSize={280}
                initialScrollIndex={currentSlideIndex}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
              <View style={styles.bannerNavWrap}>
                {data.map((item, index) => (
                  <View
                    style={[
                      styles.bannerNav,
                      {
                        backgroundColor:
                          index == currentSlideIndex
                            ? Colors.white
                            : "rgba(255, 255, 255, 0.6)",
                      },
                    ]}
                    key={index}
                  ></View>
                ))}
              </View>
            </View>
          ) : (
            <MyProductNoList onPressRegister={onPressRegister} />
          )}
          </ScrollView>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </>
  );
};

export default MyProduct;
