import {
  Image,
  ImageBackground,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  useWindowDimensions,
  Dimensions,
  Button,
} from "react-native"
import { useCallback, useRef, useState } from "react"
import { ScrollView } from "react-native-gesture-handler"
import { LinearGradient } from "expo-linear-gradient"
import RenderHtml from 'react-native-render-html'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import StaticText from "../../../../global/StaticText"
import AppSettings from "../../../../global/AppSettings"
import Colors from "../../../../global/Colors"
import RecentNews from "./RecentNews"
import AnimatedHeader from "../../../Helper/AnimatedHeader"
import styles from "./style"
import { Video } from 'expo-av'
import YoutubePlayer from "react-native-youtube-iframe"
import { responsiveWidth } from "react-native-responsive-dimensions"

const NewsDetails = ({
  data,
  loading,
  onPress,
  currentSlideIndex,
  setCurrentSlideIndex,
  sliderRef,
  yAxisValue,
  setYAxisValue,
  showVideoFirstLoader,
  showVideoSecLoader,
  videoFirstLoader,
  videoSecLoader
}) => {

  const video = useRef(null);
  const { width } = useWindowDimensions()
  const newsDetails = {
    html: `<div style="color:white;word-wrap:break-word;font-size:18px;font-weight:400;">${data?.news?.description?.length ? data?.news?.description : ``}</div>`
  }

  const renderRecentNews = useCallback(
    ({ item }) => (
      <RecentNews
        onPress={onPress}
        item={item}
      />
    ),
    []
  )

  const getDots = () => {
    let dots = []
    if (data?.related_news?.length) {
      let totalSlide = Math.ceil(data?.related_news?.length / 2)
      for (let flag = 0; flag < totalSlide; flag++) {
        dots.push(<View style={[styles.bannerNav, { backgroundColor: (flag == currentSlideIndex) ? Colors.white : 'rgba(255, 255, 255, 0.6)' }]} key={flag}></View>)
      }
    }
    return dots
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <AnimatedHeader
          label={StaticText.screen.news_details.heading}
          // yAxisValue={yAxisValue}
          mainWrapperStyle={styles.topHeader}
          mainWrapperConditionalStyle={[styles.topHeaderAdditional, styles.topHeaderAnimatedActive]}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        // transitionForm={-120}
        // transitionTo={0}
        // yAxisValueCondtionalVal={10}
        // yAxisCompare={'greater'}
        />

        <ScrollView style={styles.mainScroll} onScroll={e => setYAxisValue(e.nativeEvent.contentOffset.y.toFixed(0))}>
          <View style={styles.mainBodyWrap}>
            {loading ? <ActivityIndicator size="large" color={Colors.royal_blue} /> :
              data?.news?.id &&
              <>
                <View style={styles.categoryListBanner}>
                  {data?.news?.news_image?.length && <Image
                    source={{ uri: data?.news?.news_image }}
                    style={styles.newsCategorybannerbg}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />}
                  <LinearGradient
                    colors={["rgba(2, 8, 24, 0) 0%", "#040A1B"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.newsCategoryBannerOverlay}
                  >
                    <Text style={styles.titleWrap}>{data?.news?.name}</Text>
                    <View style={styles.newsMeta}>
                      {data?.news?.news_categories?.length &&
                        <View style={styles.categoryTagWrap}>
                          {data?.news?.news_categories?.map(categoryData => <View style={styles.categoryTagCard} key={`cat-list-${data?.news?.id}-${categoryData?.id}${Math.random()}`}>
                            {data?.news?.news_categories?.length &&
                              <Text style={styles.categoryTitleWrap}>{categoryData?.name}</Text>
                            }
                          </View>)}
                        </View>
                      }

                      <Text style={styles.timeWrap}>{data?.news?.time}</Text>
                    </View>
                  </LinearGradient>
                </View>

                {/* {(videoFirstLoader) &&
                  <SkeletonPlaceholder borderRadius={4}>
                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                      <SkeletonPlaceholder.Item width={width} height={200} borderRadius={20} />
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder>} */}
                
                {!!data?.news?.video_link_1 && data?.news?.video_link_1.match(/dyntube/) &&
                  <View style={styles.videoWrap}>
                    {(videoFirstLoader) &&
                      <View style={styles.skeletonWrap}>
                        <SkeletonPlaceholder >
                          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                            <SkeletonPlaceholder.Item width={responsiveWidth(88)} height={195} />
                          </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                      </View>
                    }

                    

                      <Video
                        ref={video}
                        source={{
                          uri: data?.news?.video_link_1,
                        }}
                        //shouldPlay={true}
                        rate={1.0}
                        volume={1.0}
                        resizeMode="contain"
                        useNativeControls
                        style={styles.cardWrap}
                        onLoad={() => showVideoFirstLoader(false)}
                        onLoadStart={() => showVideoFirstLoader(true)}
                      />
                  </View>}

                {
                  !!data?.news?.video_link_2  && data?.news?.video_link_2.match(/dyntube/) &&
                  <View style={styles.videoWrap}>
                    {(videoSecLoader) &&
                      <View style={styles.skeletonWrap}>
                        <SkeletonPlaceholder >
                          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                            <SkeletonPlaceholder.Item width={responsiveWidth(88)} height={195} />
                          </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                      </View>
                    }

                    <Video
                      ref={video}
                      source={{
                        uri: data?.news?.video_link_2,
                      }}
                      // shouldPlay={showModal}
                      rate={1.0}
                      volume={1.0}
                      resizeMode="contain"
                      useNativeControls
                      style={styles.cardWrap}
                      onLoad={() => showVideoSecLoader(false)}
                      onLoadStart={() => showVideoSecLoader(true)}
                    />

                  </View>
                }



                <View style={{ marginBottom: 14, justifyContent: 'center', alignItems: 'center', paddingRight: responsiveWidth(10) }}>
                  <RenderHtml
                    contentWidth={width}
                    source={newsDetails}
                    enableExperimentalMarginCollapsing={true}
                  />
                </View>
                <Text style={styles.newsDetailInnersWrap}>
                  {StaticText.screen.news_details.recent_news.heading}
                </Text>

                {data?.related_news?.length &&
                  <View style={styles.newsListWrap}>
                    <FlatList
                      horizontal
                      pagingEnabled={true}
                      estimatedItemSize={280}
                      data={data?.related_news}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderRecentNews}
                      ref={sliderRef}
                      initialScrollIndex={currentSlideIndex}
                      onScroll={(e) => {
                        setCurrentSlideIndex((e.nativeEvent.contentOffset.x / width).toFixed(0))
                      }}
                    />
                    <View style={styles.bannerNavWrap}>{getDots()}</View>
                  </View>
                }
              </>}
          </View>
        </ScrollView>
      </LinearGradient>
      {/* </ImageBackground> */}
    </View >
  )
}

export default NewsDetails
