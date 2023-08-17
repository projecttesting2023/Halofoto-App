import { useIsFocused, useNavigation } from "@react-navigation/native"
import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../context/Provider"
import productLists from "../../../context/actions/dashboard/productLists"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import ProductCatalogScreen from "../../../screens/Dashboard/ProductCatalog"
import productListFilter from "../../../context/actions/dashboard/productListFilter"

const ProductCatalog = () => {
  const {
    productListState: { error, loading, data },
    productListDispatch,
    navigationDispatch,
    navigationState: { display },
    productListFilterState: { filterData, filterError, filterLoading },
    productListFilterDispatch,
  } = useContext(GlobalContext)
  const [yAxisValue, setYAxisValue] = useState(0)
  const { navigate, goBack } = useNavigation()
  const [currentPage, setCurrentPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)
  const [pagination, setPagination] = useState(false)
  const [productListData, setProductListData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [userFilterData, setUserFilterData] = useState([])
  const [filterResult, setFilterResult] = useState(false)

  const onPress = (route, params) =>
    route ? navigate(route, params) : goBack()
  const isFocused = useIsFocused()

  useEffect(() => {
    isFocused &&
      (showNavigation()(navigationDispatch),
      productListFilter()(productListFilterDispatch))
  }, [isFocused])


  useEffect(() => {
    let params = {
      page: currentPage,
      filter: userFilterData.join("&").replace(/,/g, "&"),
    }
    productLists(params)(productListDispatch)
    if (currentPage > 1 && !pagination) {
      setPagination(true)
    } else if (currentPage == 1) {
      setPagination(false)
    }
    return () => {}
  }, [currentPage,filterResult])


  useEffect(() => {
    if (!loading && data?.recommended_product?.data) {
      if (currentPage == 1) {
        setProductListData(data?.recommended_product?.data?.data)
      } else {
        setProductListData((productListData) => [
          ...productListData,
          ...data?.recommended_product?.data?.data,
        ])
      }
      setTotalPages(data?.recommended_product?.data?.last_page)
    }
    if (refreshing && !loading) {
      setRefreshing(false)
    }
    return () => {}
  }, [loading])

  const onSubmitModal = (filterProps) => {
    setUserFilterData([])
    if (filterProps?.camera_type?.length > 0) {
      setUserFilterData((userFilterData) => [
        ...userFilterData,
        filterProps?.camera_type?.map(
          (data, index) => `camera_type_id[]=${data}`
        ),
      ])
    }
    if (filterProps?.mount_type?.length > 0) {
      setUserFilterData((userFilterData) => [
        ...userFilterData,
        filterProps?.mount_type?.map((data, index) => `mount_id[]=${data}`),
      ])
    }
    if (filterProps?.lense_category?.length > 0) {
      setUserFilterData((userFilterData) => [
        ...userFilterData,
        filterProps?.lense_category?.map(
          (data, index) => `category_id[]=${data}`
        ),
      ])
    }

    if (currentPage > 1) {
      setCurrentPage(1)
    } else {
      setFilterResult(!filterResult)
    }
    setRefreshing(true)
  }

  const onEndReached = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }


  const onRefresh = () => {
    if (currentPage > 1) {
      setCurrentPage(1)
      setRefreshing(true)
      setCurrentPage(1)
    }
  }

  return (
    <ProductCatalogScreen
      productListData={productListData}
      data={data}
      loading={pagination || refreshing ? false : loading}
      isLoading={loading}
      onPress={onPress}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      yAxisValue={yAxisValue}
      setYAxisValue={setYAxisValue}
      filterData={filterData}
      filterLoading={filterLoading}
      onSubmitModal={onSubmitModal}
    />
  )
}

export default ProductCatalog
