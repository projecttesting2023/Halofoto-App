import { useIsFocused, useNavigation } from "@react-navigation/native"
import React, { useContext, useEffect, useState } from "react"
import MessageListScreen from "../../../../screens/Dashboard/Message/MessageList"
import { showNavigation } from "../../../../context/actions/common/manageNavigation"
import messageListFilter from "../../../../context/actions/dashboard/messageListFilter"
import messageList from "../../../../context/actions/dashboard/messageList"
import { GlobalContext } from "../../../../context/Provider"

const MessageList = () => {
  const {
    messageListState: { data, error, loading },
    messageListDispatch,
    navigationDispatch,
    navigationState: { display },
    messageListFilterState: { filterData, filterError, filterLoading },
    messageListFilterDispatch,
  } = useContext(GlobalContext)

  const [yAxisValue, setYAxisValue] = useState(0)
  const { navigate, goBack } = useNavigation()
  const [currentPage, setCurrentPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)
  const [pagination, setPagination] = useState(false)
  const [ messageListData, setMessageListData ] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [userFilterData, setUserFilterData] = useState([])
  const [filterResult, setFilterResult] = useState(false)
  const [ readStatus, setReadStatus ] = useState([])

  const onPress = (route, params) =>{
    if(route){
      setReadStatus(readStatus =>[...readStatus,params.messageId])
      navigate(route, params)
    }else{
      goBack()
    }
  }
   
  const isFocused = useIsFocused()

  useEffect(() => {
    isFocused &&  
      (showNavigation()(navigationDispatch),
      messageListFilter()(messageListFilterDispatch))    
  }, [isFocused])

  useEffect(() => {
    let params = {
      page: currentPage,
      filter: userFilterData.join("&").replace(/,/g, "&"),
    }
    messageList(params)(messageListDispatch)
    if (currentPage > 1 && !pagination) {
      setPagination(true)
    } else if (currentPage == 1) {
      setPagination(false)
    }
    return () => {}
  }, [currentPage, filterResult])

  useEffect(() => {
    if (!loading && data?.messages) {   
      if (currentPage == 1) {
        setMessageListData(data?.messages?.data)
      } else {
        setMessageListData((messageListData) => [
          ...messageListData,
          ...data?.messages?.data,
        ])
      }
      setTotalPages(data?.messages?.last_page)
    }
    if (refreshing && !loading) {
      setRefreshing(false)
    }
    return () => {}
  }, [loading])

  const onSubmitModal = filterProps => {
    setUserFilterData([])
    if (filterProps?.message_type?.length > 0) {
      setUserFilterData((userFilterData) => [
        ...userFilterData,
        filterProps?.message_type?.map(
          (data, index) => `category_id[]=${data}`
        ),
      ])
    }

    if (filterProps?.days) {
      setUserFilterData((userFilterData) => [
        ...userFilterData, `days=${filterProps?.days}`
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
    <MessageListScreen
      messageListData={messageListData}
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
      readStatus={readStatus}
    />
  )
}

export default MessageList
