import React, { useContext, useEffect, useState, useCallback } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../../context/Provider";
import { hideNavigation } from "../../../context/actions/common/manageNavigation";
import UsedVoucherListScreen from "../../../screens/Dashboard/Voucher/History/UsedVoucherList";
import voucherList from "../../../context/actions/dashboard/voucherList";
import { VOUCHER } from "../../../constants/RouteNames";

const UsedVoucherList = () => {
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

  const onPress = (route, params) =>
    route ? navigate(route, params) : goBack();

  useEffect(() => {
    isFocused && hideNavigation()(navigationDispatch);
  }, [isFocused]);

  useEffect(() => {
    let params = {
      page: currentPage,
      categgory: "",
      screen:"history"
    };
    voucherList(params)(voucherListDispatch);
    if (currentPage > 1 && !pagination) {
      setPagination(true);
    } else if (currentPage == 1) {
      setPagination(false);
    }
    return () => {};
  }, [currentPage]);

  useEffect(() => {
    if (!loading && data?.use_histories) {
      if (currentPage == 1) {
        setVoucherListData(data?.use_histories?.data);
      } else {
        setVoucherListData((voucherListData) => [
          ...voucherListData,
          ...data?.use_histories?.data,
        ]);
      }
      setTotalPages(data?.use_histories?.last_page);
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

  return (
    <UsedVoucherListScreen
      voucherListData={voucherListData}
      data={data}
      loading={pagination || refreshing ? false : loading}
      isLoading={loading}
      onPress={onPress}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
    />
  );
};

export default UsedVoucherList;
