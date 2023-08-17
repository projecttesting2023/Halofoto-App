import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import reviewList from "../../../../context/actions/dashboard/reviewList";
import { GlobalContext } from "../../../../context/Provider";
import ReviewListScreen from "../../../../screens/Dashboard/ReviewCenter/ReviewList";
import { showNavigation } from "../../../../context/actions/common/manageNavigation";

const ReviewList = () => {
  const {
    reviewListState: { data, error, loading },
    reviewListDispatch, navigationDispatch, navigationState: { display }
  } = useContext(GlobalContext);

  // const [yAxisValue, setYAxisValue] = useState(0)

  const { navigate, goBack } = useNavigation()

  const { height, width } = Dimensions.get("window");
  // const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [pagination, setPagination] = useState(false);
  const [reviewListData, setReviewListData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const isFocused = useIsFocused()
  const onPress = (route, params) => (route && params) ? navigate(route, params) : goBack()

  useEffect(() => {
    isFocused && (
      showNavigation()(navigationDispatch),
      reviewList(1)(reviewListDispatch)
    )
  }, [isFocused])

  // const navigateSingleProduct = (productId, route) => {
  //   navigate(route, {
  //     productId,
  //   })
  // }

  useEffect(() => {
    let params = {
      page: currentPage,
    }
  
    reviewList(params)(reviewListDispatch)
    if (currentPage > 1 && !pagination) {
      setPagination(true)
    } else if (currentPage == 1) {
      setPagination(false)
    }
    return (() => { })
  }, [currentPage])

  useEffect(() => {
    if (!loading && data?.reviewed) {
      if (currentPage == 1) {
        setReviewListData(data?.reviewed?.data)
      } else {
        setReviewListData(reviewListData => [...reviewListData, ...data?.reviewed?.data])
      }
      setTotalPages(data?.reviewed?.last_page)
    }
    if (refreshing && !loading) {
      setRefreshing(false)
    }
    return (() => { })
  }, [loading])

  const onEndReached = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage(currentPage => currentPage + 1)
    }
  }

  const onRefresh = () => {
    if (currentPage > 1) {
      setRefreshing(true)
      setCurrentPage(1)
    }
  }

  return (
    <ReviewListScreen
      reviewListData={reviewListData}
      data={data}
      loading={pagination || refreshing ? false : loading}
      isLoading={loading}
      onPress={onPress}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
    // yAxisValue={yAxisValue}
    // setYAxisValue={setYAxisValue}
    />
  );
};

export default ReviewList;
