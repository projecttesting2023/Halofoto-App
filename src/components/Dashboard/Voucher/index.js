import React, { useContext, useEffect, useState, useCallback } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../../context/Provider";
import { hideNavigation } from "../../../context/actions/common/manageNavigation";
import VoucherScreen from "../../../screens/Dashboard/Voucher/Voucher/VoucherList";
import voucherList from "../../../context/actions/dashboard/voucherList";
import { VOUCHER } from "../../../constants/RouteNames";

const Voucher = () => {
  const {
    voucherListState: { data, error, loading },
    voucherListDispatch,
    navigationDispatch,
    navigationState: { display },
  } = useContext(GlobalContext);
  const isFocused = useIsFocused();
  const { navigate, goBack } = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [pagination, setPagination] = useState(false);
  const [voucherListData, setVoucherListData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const onPress = (route, params) =>
    route && params
      ? navigate(route, params)
      : route
      ? navigate(route)
      : goBack();

  useEffect(() => {
    isFocused && hideNavigation()(navigationDispatch);
  }, [isFocused]);

  useEffect(() => {
    let params = {
      page: currentPage,
      categgory: currentCategory > 0 ? currentCategory : "",
    };
    voucherList(params)(voucherListDispatch);
    if (currentPage > 1 && !pagination) {
      setPagination(true);
    } else if (currentPage == 1) {
      setPagination(false);
    }
    return () => {};
  }, [currentPage, currentCategory]);

  useEffect(() => {
    if (!loading && data?.redeem_histories) {
      if (currentPage == 1) {
        setVoucherListData(data?.redeem_histories?.data);
      } else {
        setVoucherListData((voucherListData) => [
          ...voucherListData,
          ...data?.redeem_histories?.data,
        ]);
      }
      setTotalPages(data?.redeem_histories?.last_page);
    }
    if (refreshing && !loading) {
      setRefreshing(false);
    }
    return () => {};
  }, [loading]);

  const onEndReached = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };
  
  const onRefresh = () => {
    if (currentPage > 1) {
      setRefreshing(true);
      setCurrentPage(1);
    }
  };
  const onChangeCategory = (category) => {
    setCurrentPage(1);
    setCurrentCategory(category);
  };

  return (
    <VoucherScreen
      voucherListData={voucherListData}
      data={data}
      loading={pagination || refreshing ? false : loading}
      isLoading={loading}
      onPress={onPress}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onChangeCategory={onChangeCategory}
      currentCategory={currentCategory}
    />
  );
};

export default Voucher;
