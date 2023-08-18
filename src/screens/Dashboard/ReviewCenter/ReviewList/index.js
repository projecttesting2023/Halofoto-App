import { useCallback } from "react";
import {
  Text,
  Dimensions,
  ImageBackground,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import AppSettings from "../../../../global/AppSettings";
import StaticText from "../../../../global/StaticText";
import BannerCard from "../BannerCard";
import ProductCard from "../ProductCard";
import FilterBtn from "../../../Helper/SvgImg/FilterBtn";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import Colors from "../../../../global/Colors";
import styles from "./style";
import NoContentPage from "../../../Common/NoContentPage";
import { SafeAreaView } from "react-native-safe-area-context";

const ReviewList = ({
  reviewListData,
  data,
  loading,
  isLoading,
  onPress,
  onRefresh,
  refreshing,
  onEndReached,
  // yAxisValue,
  // setYAxisValue,
}) => {
  const keyExtractorProductList = useCallback(
    (item) => `list-${item.id.toString()}${Math.random()}`,
    []
  );

  const keyExtractorHotdeals = useCallback(
    (item) => `deal-list-${item.id.toString()}${Math.random()}`,
    []
  );

  const renderItem = useCallback(
    ({ item }) => <ProductCard item={item} onPress={onPress} />,
    []
  );

  const renderBanner = useCallback(
    ({ item }) => <BannerCard item={item} onPress={onPress} />,
    []
  );

  const listHeader = () => {
    return (
      <>
        {data?.to_reviews && data?.to_reviews?.length > 0 && (
          <View style={styles.hotDealsWrap}>
            <FlatList
              horizontal={true}
              data={data?.to_reviews}
              maxToRenderPerBatch={407}
              windowSize={407}
              initialNumToRender={2}
              showsHorizontalScrollIndicator={false}
              keyExtractor={keyExtractorHotdeals}
              renderItem={renderBanner}
            />
          </View>
        )}
        <View style={styles.cardHeadingWrap}>
          <Text style={styles.cardHeading}>All products</Text>
        </View>
      </>
    );
  };

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


  return (
    <View style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView>
        <AnimatedHeader
          label={StaticText.screen.review.heading}
          mainWrapperStyle={styles.topHeader}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        />

        <View style={styles.mainScroll}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.royal_blue} />
          ) : ((reviewListData?.length > 0) || (data?.to_reviews && data?.to_reviews?.length > 0)) ? (
            <>
              <View style={styles.cardWrap}>
                <FlatList
                  data={reviewListData}
                  onRefresh={onRefresh}
                  refreshing={refreshing}
                  keyExtractor={keyExtractorProductList}
                  horizontal={false}
                  maxToRenderPerBatch={Dimensions.get("screen").height}
                  windowSize={Dimensions.get("screen").height}
                  initialNumToRender={10}
                  renderItem={renderItem}
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
          ) : (
            <>
              <NoContentPage />
            </>
          )}
        </View>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};
export default ReviewList;
