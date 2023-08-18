import { useCallback } from "react"
import {
  SafeAreaView,
  ImageBackground,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
} from "react-native"

import { HOME } from "../../../constants/RouteNames"
import AppSettings from "../../../global/AppSettings"
import Colors from "../../../global/Colors"
import FilterBtn from "../../../screens/Helper/SvgImg/FilterBtn"
import BackBtn from "../../../screens/Helper/SvgImg/BackBtn"
import AnimatedHeader from "../../Helper/AnimatedHeader"
import ProductCardHorizental from "./ProductCardHorizental"
import StaticText from "../../../global/StaticText"
import ListItem from "./ListItem"
import NoContentPage from "../../Common/NoContentPage";
import styles from "./style"
import LinearGradient from "react-native-linear-gradient"


const ProductCatalog = ({
  productListData,
  data,
  loading,
  isLoading,
  onPress,
  onRefresh,
  refreshing,
  onEndReached,
  yAxisValue,
  setYAxisValue,
  filterData,
  filterLoading,
  onSubmitModal,
}) => {
  const keyExtractorProductList = useCallback(item => `list-${item.id.toString()}${Math.random()}`, [])
  const keyExtractorHotdeals = useCallback(item => `deal-list-${item.id.toString()}${Math.random()}`, [])

  const renderHotDeals = useCallback(({ item }) => <ProductCardHorizental
    item={item}
    onPress={onPress}
  />, [])

  const renderProduct = useCallback(
    ({ item }) => (
      <ListItem
        item={item}
        onPress={onPress}
      />
    ),
    []
  )


  const listHeader = () => {
    return (
      <>
        {data?.hotdeal_product?.data && data?.hotdeal_product?.data?.length > 0 && (
          <View style={styles.hotDealsWrap}>
            <Text style={styles.headingCategory}>{StaticText.screen.product_catelog.content.heading_hot_deal}</Text>
            <FlatList
              horizontal={true}
              data={data?.hotdeal_product?.data}
              maxToRenderPerBatch={350}
              windowSize={350}
              initialNumToRender={2}
              showsHorizontalScrollIndicator={false}
              keyExtractor={keyExtractorHotdeals}
              renderItem={renderHotDeals}
            />
          </View>
        )}
      </>
    )
  }

  const listFooter = () => {
    return (
      <>
        {isLoading && (<ActivityIndicator size='large' color={Colors.royal_blue} style={{ marginBottom: 16 }} />)}
      </>
    )
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
            label={StaticText.screen.product_catelog.heading}
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
                data?.recommended_product?.data?.data?.length > 0 ? (
                  <>
                    <View style={[styles.newsCardWrap]}>
                      <FlatList
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                        keyExtractor={keyExtractorProductList}
                        horizontal={false}
                        data={productListData}
                        maxToRenderPerBatch={Dimensions.get("screen").height}
                        windowSize={Dimensions.get("screen").height}
                        initialNumToRender={10}
                        renderItem={renderProduct}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        decelerationRate="fast"
                        onEndReachedThreshold={0.5}
                        onEndReached={onEndReached}
                        ListHeaderComponent={listHeader}
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
          </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  )
}

export default ProductCatalog
