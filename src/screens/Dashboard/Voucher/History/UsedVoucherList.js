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
import ListItem from "./ListItem";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import StaticText from "../../../../global/StaticText";
import styles from "./listingStyle";
import NoContentPage from "../../../Common/NoContentPage";
import { SafeAreaView } from "react-native-safe-area-context";

const UsedVoucherList = ({
  voucherListData,
  loading,
  isLoading,
  onPress,
  onRefresh,
  refreshing,
  onEndReached,
}) => {
  const renderRedemptionList = useCallback(
    ({ item }) => <ListItem item={item} onPress={onPress} />,
    []
  );

  const keyExtractorRedemptionList = useCallback(
    (item) => `list-${item.id.toString()}${Math.random()}`,
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

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
        <SafeAreaView>
        <AnimatedHeader
          label={StaticText.screen.voucher.history}
          mainWrapperStyle={styles.topHeader}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        />

        <View style={styles.mainScroll}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.royal_blue} />
          ) : voucherListData.length ? (
            <>
              <FlatList
                onRefresh={onRefresh}
                refreshing={refreshing}
                keyExtractor={keyExtractorRedemptionList}
                horizontal={false}
                data={voucherListData}
                maxToRenderPerBatch={Dimensions.get("screen").height}
                windowSize={Dimensions.get("screen").height}
                initialNumToRender={10}
                renderItem={renderRedemptionList}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                decelerationRate="fast"
                onEndReachedThreshold={0.5}
                onEndReached={onEndReached}
                ListFooterComponent={listFooter}
                contentContainerStyle={styles.contentContainer}
              />
            </>
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

export default UsedVoucherList;
