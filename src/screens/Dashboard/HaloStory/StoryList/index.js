import { useCallback } from "react";
import {
  SafeAreaView,
  ImageBackground,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
} from "react-native";

import AppSettings from "../../../../global/AppSettings";
import Colors from "../../../../global/Colors";
import ListItem from "./ListItem";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import StaticText from "../../../../global/StaticText";
import styles from "./style";
import NoContentPage from "../../../Common/NoContentPage";


const StoryList = ({
  storyListData,
  data,
  loading,
  isLoading,
  onPress,
  onRefresh,
  refreshing,
  onEndReached,
  toDaysMinutesSeconds,
}) => {
  const renderStoryList = useCallback(
    ({ item }) => <ListItem item={item} onPress={onPress} toDaysMinutesSeconds={toDaysMinutesSeconds}/>,
    []
  );

  const keyExtractor = useCallback(
    (item) => `story-list-${item.id.toString()}${Math.random()}`,
    []
  );

  const listHeader = () => {
    return (
      <>
        <Text style={styles.textBannerHeading}>
          {StaticText.screen.story_list.heading}
        </Text>
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
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      >
        <SafeAreaView>
          <AnimatedHeader
            label={StaticText.screen.story_list.nav_heading}
            mainWrapperStyle={styles.topHeader}
            innerWraperStyle={styles.titleHolder}
            buttonWrapStyle={styles.backWrap}
            labelStyle={styles.pageHeading}
            onPress={onPress}
          />
          

          <View style={styles.mainScroll}>
            {loading ? (
              <View style={styles.mainBodyWrap}>
                <ActivityIndicator size="large" color={Colors.royal_blue} />
              </View>
            ) : storyListData?.length > 0 ? (
              <View style={styles.mainBodyWrap}>
                <View style={[styles.newsCardWrap]}>
                  <FlatList
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    keyExtractor={keyExtractor}
                    horizontal={false}
                    data={storyListData}
                    maxToRenderPerBatch={Dimensions.get("screen").height}
                    windowSize={Dimensions.get("screen").height}
                    initialNumToRender={10}
                    renderItem={renderStoryList}
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
              </View>
            ) : (
              <>
                <NoContentPage />
              </>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default StoryList;
