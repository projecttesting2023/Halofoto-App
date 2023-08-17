import React, { useContext, useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { GlobalContext } from "../../../context/Provider"
import TermsAndConditionsScreen from "../../../screens/Dashboard/TermsAndConditions"
import termsAndConditions from "../../../context/actions/dashboard/termsAndConditions"

const TermsAndConditions = () => {
  const {
    termsAndConditionsDispatch,
    termsAndConditionsState: { error, loading, data },
  } = useContext(GlobalContext)
  const { navigate, goBack } = useNavigation();
  const regex = /(<([^>]+)>)/gi

  useEffect(() => {
    termsAndConditions()(termsAndConditionsDispatch)
  }, [])

  const onPress = (route) => navigate(route)

  return <TermsAndConditionsScreen onPress={onPress} />
};
export default TermsAndConditions
