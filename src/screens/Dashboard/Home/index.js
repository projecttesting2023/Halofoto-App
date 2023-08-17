import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native"
import Carousel from 'react-native-banner-carousel';

import { FlashList } from "@shopify/flash-list"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import AppSettings from "../../../global/AppSettings"
import styles from "./style"
import DashboardHeader from "../../Helper/DashboardHeader"
import Colors from "../../../global/Colors"
import { WARENTY_REGISTRATION_PACKAGE_QR_CODE } from "../../../constants/RouteNames"
import DashboardButtons from "./DashboardButtons"
import StaticText from "../../../global/StaticText"
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth"

const BannerWidth = Dimensions.get('window').width;


const Home = ({
  loading,
  data,
  currentBannerIndex,
  setCurrentBannerIndex,
  screenHeight,
  screenWidth,
  onPress,
  regex,
  navMenus,
  profileLoading,
  profileData,
}) => {



  return (
    
    <ImageBackground
      resizeMode="cover"
      style={styles.overlayWrap}
      source={AppSettings.background_inner_image}
    >
      
      <DashboardHeader profileData={{
        profile_status: profileLoading,
        profile_info: profileData,
      }} onPress={onPress} />
      <View style={styles.catalogBanner}>
        <ImageBackground
          resizeMode="cover"
          style={styles.overlayWrapBanner}
          source={AppSettings.banner_overlay}
        >
          {/* <View style={styles.bannerMainWrap}>
                  {!loading && data?.length &&
                    <FlashList
                      pagingEnabled
                      horizontal
                      onScroll={(e) => {
                        setCurrentBannerIndex((e.nativeEvent.contentOffset.x / screenWidth).toFixed(0))
                      }}
                      data={data}
                      showsHorizontalScrollIndicator={false}
                      scrollEnabled
                      scrollEventThrottle={16}
                      estimatedItemSize={280}
                      renderItem={({ item, index }) => {
                        return (
                          <View style={{ width: screenWidth, height: 210 }}>
                            <Image
                              source={{ uri: item?.banner_image }}
                              style={styles.bannerBg}
                            />
                            <View style={styles.textWrap}>
                              {item?.title && <Text style={styles.bannerText}>{item?.title?.replace(regex, '')}</Text>}
                              {item?.description && <Text style={styles.bannerSubText}>{item?.description?.replace(regex, '')}</Text>}
                            </View>
                          </View>
                        )
                      }}
                    />}
                </View> */}
          <View style={styles.bannerMainWrap}>
            {!loading && data?.length &&
              <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
                pageIndicatorStyle={{backgroundColor:'rgba(255, 255, 255, 0.6)'}}
                activePageIndicatorStyle={{backgroundColor: Colors.white }}
                pageSize={BannerWidth}
              >
                {data.map((item, index) => {
                  return (
                    <View style={{ width: screenWidth, height: 210 }}>
                      <Image
                        source={{ uri: item?.banner_image }}
                        style={styles.bannerBg}
                      />
                      <View style={styles.textWrap}>
                        {item?.title && <Text style={styles.bannerText}>{item?.title?.replace(regex, '')}</Text>}
                        {item?.description && <Text style={styles.bannerSubText}>{item?.description?.replace(regex, '')}</Text>}
                      </View>
                    </View>
                  )
                })}
              </Carousel>}
          </View>


          {/* {!loading && data?.length && <>
            <View style={styles.bannerNavWrap}>
              {data.map((item, index) => <View style={[styles.bannerNav, { backgroundColor: index == currentBannerIndex ? Colors.white : 'rgba(255, 255, 255, 0.6)' }]} key={item?.id}></View>)}
            </View>
          </>} */}
        </ImageBackground>
      </View>

      <View style={styles.buttonWrap}>
        <RoundedCornerGradientStyleBlueFullWidth
          onPress={() => onPress(WARENTY_REGISTRATION_PACKAGE_QR_CODE)}
          label={StaticText.button.product_registration}
        // disabled={loading}
        // showLoader={loading}
        />
      </View>
      <View style={styles.tabWrap}>
        {navMenus.length && navMenus.map((item, index) =>
          <DashboardButtons key={item.name} menu={item} onPress={onPress} />
        )}
      </View>
      
    </ImageBackground>
   
  )
}
export default Home