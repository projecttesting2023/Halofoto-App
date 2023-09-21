import { useCallback } from "react";
import {
  ImageBackground,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import AppSettings from "../../../../global/AppSettings";
import Colors from "../../../../global/Colors";
import NewsCardHorizental from "./NewsCardHorizental";
import NewsCategorydHorizental from "./NewsCategorydHorizental";
import ListItem from "./ListItem";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import StaticText from "../../../../global/StaticText";
import styles from "./style";
import NoContentPage from "../../../Common/NoContentPage";
import LinearGradient from "react-native-linear-gradient";

const NewsList = ({
  newsData,
  data,
  loading,
  isLoading,
  onPress,
  onRefresh,
  refreshing,
  onEndReached,
}) => {
  const renderRecentNews = useCallback(
    ({ item }) => <NewsCardHorizental item={item} onPress={onPress} />,
    []
  );

  const renderNewsCategory = useCallback(
    ({ item }) => <NewsCategorydHorizental item={item} onPress={onPress} />,
    []
  );

  const renderNews = useCallback(
    ({ item }) => <ListItem item={item} onPress={onPress} />,
    []
  );

  const keyExtractorNewsList = useCallback(
    (item) => `list-${item.id.toString()}${Math.random()}`,
    []
  );
  const keyExtractorRecentNews = useCallback(
    (item) => `recent-${item.id.toString()}${Math.random()}`,
    []
  );
  const keyExtractorNewsCategory = useCallback(
    (item) => `category-${item.id.toString()}${Math.random()}`,
    []
  );

  const listFooter = () => {
    return (
      <>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={Colors.royal_blue}
            style={{ marginBottom: 16 }}
          />
        )}
      </>
    );
  };

  const listHeader = () => {
    return (
      <>
        {data?.recent_news?.length != 0 ?  (
          <View style={styles.newsSlider}>
            <FlatList
              horizontal={true}
              data={data?.recent_news}
              maxToRenderPerBatch={350}
              windowSize={350}
              initialNumToRender={2}
              showsHorizontalScrollIndicator={false}
              keyExtractor={keyExtractorRecentNews}
              renderItem={renderRecentNews}
            />
          </View>
        ):null}

        {data?.allCategories?.length != 0 ? (
          <View style={styles.categorySlider}>
            <FlatList
              horizontal={true}
              data={data?.allCategories}
              maxToRenderPerBatch={43}
              windowSize={43}
              initialNumToRender={4}
              showsHorizontalScrollIndicator={false}
              renderItem={renderNewsCategory}
              keyExtractor={keyExtractorNewsCategory}
            />
          </View>
        ):null}
      </>
    );
  };

  return (
    <View style={styles.container}>
      
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <AnimatedHeader
          label={StaticText.screen.news.heading}
          mainWrapperStyle={styles.topHeader}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        />
      
        <View style={styles.mainScroll}>          
            {loading ? (
              <ActivityIndicator size="large" color={Colors.royal_blue} />
            ) :
             data?.news?.data.length ? (
              <>
                <View style={[styles.newsCardWrapMain]}>
                  <FlatList
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    keyExtractor={keyExtractorNewsList}
                    horizontal={false}
                    data={newsData}
                    maxToRenderPerBatch={Dimensions.get("screen").height}
                    windowSize={Dimensions.get("screen").height}
                    initialNumToRender={10}
                    renderItem={renderNews}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    decelerationRate="fast"
                    onEndReachedThreshold={0.5}
                    onEndReached={onEndReached}
                    ListHeaderComponent={listHeader}
                    ListFooterComponent={listFooter}
                    // onScroll={(e) =>
                    //   setYAxisValue(e.nativeEvent.contentOffset.y.toFixed(0))
                    // }
                  />
                </View>
              </>
            ) :
             (
              <>
                <NoContentPage />
              </>
            )}
        </View>
        </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default NewsList;
