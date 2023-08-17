import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import MessageDetailsScreen from "../../../../screens/Dashboard/Message/MessageDetails";
import { hideNavigation } from "../../../../context/actions/common/manageNavigation";
import { GlobalContext } from "../../../../context/Provider";
import messageDetails from "../../../../context/actions/dashboard/messageDetails";

const MessageDetails = ({ route, navigation }) => {

  const IsFocused = useIsFocused()
  const { messageId } = route.params

  const {
    messageDetailsState: { data, error, loading },
    messageDetailsDispatch,
    navigationDispatch, navigationState: { display }
  } = useContext(GlobalContext);


  const onPress = route => route ? navigation(route) : navigation.goBack()

    useEffect(() => {
        IsFocused && (
          hideNavigation()(navigationDispatch),
          messageDetails(messageId)(messageDetailsDispatch)
        )
      }, [IsFocused])

  return (
    <MessageDetailsScreen
      data={data}
      loading={loading}
      onPress={onPress}
    />
  );
};

export default MessageDetails;
