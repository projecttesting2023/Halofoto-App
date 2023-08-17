import React, { useContext, useEffect, useState } from "react"
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import Toast from 'react-native-root-toast'
import moment from "moment"
import { useIsFocused } from "@react-navigation/core"

import { GlobalContext } from "../../../context/Provider"
import SingleProductScreen from "../../../screens/Dashboard/MyProduct/SingleProduct"
import myProductDetails from "../../../context/actions/dashboard/myProductDetails"

import StaticText from "../../../global/StaticText"
import { hideNavigation } from "../../../context/actions/common/manageNavigation"

const SingleProduct = ({ route, navigation }) => {
  const IsFocused = useIsFocused()
  const { warrantyId, displayCertificate, currentSlideIndex } = route.params
  const [showCertificate, setShowCertificate] = useState(displayCertificate)

  const navTextMenus = [
    {
      name: 'bill',
      label: StaticText.screen.my_product_details.content.bill,
      component: 'Download'
    },
    {
      name: 'repair',
      label: StaticText.screen.my_product_details.content.e_repair,
      component: 'Repair'
    },
    {
      name: 'review',
      label: StaticText.screen.my_product_details.content.review,
      component: 'Star'
    }
  ]

  const {
    myProductDetailsState: { error, loading, data },
    myProductDetailsDispatch,
    navigationDispatch, navigationState: { display }
  } = useContext(GlobalContext)

  const onPress = route => {
    if (route == 'SingleReview') {
      navigation.navigate(route, {
        warrantyId,
      })
    } else {
      navigation.navigate(route, {
        slideIndex: currentSlideIndex
      })
    }
  }

  const onPressTab = (tab, url) => {
    if (tab == 'bill') {
      url?.length > 0 ? handleFileDownload(url) : Toast.show(StaticText.alert.no_invoice_found)
    }
  }

  useEffect(() => {
    IsFocused && (
      hideNavigation()(navigationDispatch),
      myProductDetails(warrantyId)(myProductDetailsDispatch)
    )
  }, [IsFocused])


  const handleFileDownload = async (url) => {
    let date = moment().format('YYYYMMDDhhmmss')
    let fileExt = url.split('.').pop()
    let fileUri = FileSystem.documentDirectory + `${date}.${fileExt}`

    try {
      Toast.show(StaticText.alert.download_start)
      const res = await FileSystem.downloadAsync(url, fileUri)
      saveFile(res.uri)
    } catch (err) {

    }
  }

  const saveFile = async (fileUri) => {
    const res = await MediaLibrary.requestPermissionsAsync()
    if (res.granted) {
      try {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        const album = await MediaLibrary.getAlbumAsync('Download');
        if (album == null) {
          await MediaLibrary.createAlbumAsync('Download', asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }
        Toast.show(StaticText.alert.download_complete)
      } catch (err) {

      }
    } else {
      alert(StaticText.alert.download_permission)
    }
  }

  return (
    <SingleProductScreen
      data={data}
      loading={loading}
      onPress={onPress}
      showCertificate={showCertificate}
      setShowCertificate={setShowCertificate}
      onPressTab={onPressTab}
      navTextMenus={navTextMenus}
    />
  )
}
export default SingleProduct