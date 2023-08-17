import React from "react"
import { useNavigation } from '@react-navigation/native'
import SoftwareLicenseScreen from '../../../screens/Common/Settings/SoftwareLicense'

const SoftwareLicense = () => {
  const { navigate, goBack } = useNavigation()


  const onPress = (route) => route ? navigate(route) : goBack()

  return (
    <SoftwareLicenseScreen onPress={onPress} />
  )
}

export default SoftwareLicense
