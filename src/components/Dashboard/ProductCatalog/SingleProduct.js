import React, { useContext, useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/core"
import Toast from 'react-native-root-toast'

import { GlobalContext } from "../../../context/Provider"
import productDetails from "../../../context/actions/dashboard/productDetails"
import SingleProductScreen from "../../../screens/Dashboard/ProductCatalog/ProductDetails"
import StaticText from "../../../global/StaticText"
import { hideNavigation } from "../../../context/actions/common/manageNavigation"

const SingleProduct = ({ route, navigation }) => {
  const IsFocused = useIsFocused()
  const { productId } = route.params
  const [videoModal, showVideoModal] = useState(false)
  const [videoProp, setVideoProp] = useState({ url: '', poster: '' })

  const {
    productDetailsState: { error, loading, data },
    productDetailsDispatch,
    navigationDispatch, navigationState: { display }
  } = useContext(GlobalContext)

  const onPress = route => !!route ? navigation.navigate(route) : navigation.goBack()

  const navMenus = [
    {
      name: 'video',
      label: StaticText.screen.product_details.content.video,
      component: 'Video'
    },
    {
      name: 'rating',
      label: data?.product?.rating ? data?.product?.rating : ` Review`,
      component: 'Star'
    },
  ]

  useEffect(() => {
    IsFocused && (
      hideNavigation()(navigationDispatch),
      productDetails(productId)(productDetailsDispatch)
    )
  }, [IsFocused])

  const onPressTab = (tab, url, image) => {
    if (tab == 'video') {
      url?.length > 0 ? (
        setVideoProp({ url, poster: image }),
        showVideoModal(true)
      ) : Toast.show(StaticText.alert.no_video_found)
    }
  }


  return (
    <SingleProductScreen
      data={data}
      loading={loading}
      onPress={onPress}
      navMenus={navMenus}
      onPressTab={onPressTab}
      videoModal={videoModal}
      videoProp={videoProp}
      showVideoModal={showVideoModal}
    />
  )
}

export default SingleProduct