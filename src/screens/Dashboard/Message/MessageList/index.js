import React, { useCallback } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import AppSettings from "../../../../global/AppSettings";
import styles from "./styles";
import StaticText from "../../../../global/StaticText";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import Colors from "../../../../global/Colors";
import NoContentPage from "../../../Common/NoContentPage";
import ListItem from "./ListItem";
import { FlatList } from "react-native";

const MessageList = ({ 
  messageListData,
  data,
  loading,
  isLoading,
  onPress,
  onRefresh,
  refreshing,
  onEndReached,
  filterData,
  filterLoading,
  yAxisValue,
  setYAxisValue,
  onSubmitModal,
  readStatus,
 }) => {
  const keyExtractorProductList = item => `list-${item.id.toString()}${Math.random()}`

  const renderProduct =({ item }) => (
      <ListItem
        item={item}
        onPress={onPress}
        readStatus={readStatus}
      />
    )

  const listFooter = () => {
    return (
      <>
        {isLoading && (<ActivityIndicator size='large' color={Colors.royal_blue} style={{ marginBottom: 16 }} />)}
      </>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
          <AnimatedHeader
            label={StaticText.screen.message_list.heading}
            mainWrapperStyle={styles.topHeader}
            innerWraperStyle={styles.titleHolder}
            buttonWrapStyle={styles.backWrap}
            labelStyle={styles.pageHeading}
            onPress={onPress}
            showFilterIcon={!loading}
            filterData={filterData}
            filterLoading={filterLoading}
            onSubmitModal={onSubmitModal}
          />
           <View style={styles.mainScroll}>
              {loading ? <ActivityIndicator size="large" color={Colors.royal_blue} /> :
                data?.messages?.data?.length > 0 ? (
                  <>
                    <View style={[styles.newsCardWrap]}>
                      <FlatList
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                        keyExtractor={keyExtractorProductList}
                        horizontal={false}
                        data={messageListData}
                        maxToRenderPerBatch={Dimensions.get("screen").height}
                        windowSize={Dimensions.get("screen").height}
                        initialNumToRender={10}
                        renderItem={renderProduct}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        decelerationRate="fast"
                        onEndReachedThreshold={0.5}
                        onEndReached={onEndReached}
                        // ListHeaderComponent={listHeader}
                        ListFooterComponent={listFooter}
                        onScroll={e => setYAxisValue(e.nativeEvent.contentOffset.y.toFixed(0))}
                      />
                    </View>
                  </>
                ) : 
                <>
                   <NoContentPage />
                </>
              }
          </View>
      </ImageBackground>
    </View>
  );
};

export default MessageList
