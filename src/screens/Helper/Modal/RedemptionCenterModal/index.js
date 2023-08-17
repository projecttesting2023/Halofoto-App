import { useState } from "react";
import { Text, Pressable, View, Modal } from "react-native";
import CloseIcon from "../../SvgImg/CloseIcon";
import styles from "./style";
import StaticText from "../../../../global/StaticText";
import RoundedCornerGradientStyleBlue from "../../Button/RoundedCornerGradientStyleBlue";
import Plus from "../../SvgImg/Plus";
import { Animated } from "react-native";
import Colors from "../../../../global/Colors";
import DoubleMan from "../../SvgImg/DoubleMan";
import Lock from "../../SvgImg/Lock";
import SingleManBlue from "../../SvgImg/SingleManBlue";
import { WARENTY_REGISTRATION_PACKAGE_QR_CODE } from "../../../../constants/RouteNames";
import ProfileButtonsModal from "./ProfileButtonsModal";

const RedemptionCenterModal = ({
  onPress,
  onShare,
}) => {
  const [modalView, showModalView] = useState(false);

  return (
    <>
      {modalView && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalView}
          onRequestClose={() => {
            showModalView(!modalView);
          }}
        >
          <View style={[styles.modalWrap]}>
            <View style={[styles.container]}>
              <View style={[styles.headerContent]}>
                {/* {heading ? ( */}
                <Text style={[styles.headerText]}>{StaticText.screen.redemption_centre.content.earn_points}</Text>
                {/* ) : (
                  ""
                )} */}
                <Pressable onPress={() => showModalView(!modalView)}>
                  <CloseIcon />
                </Pressable>
              </View>
             
                <ProfileButtonsModal
                  key={`prof-button-${Math.random()}`}
                  menu={{
                    name: "register_product",
                    label:
                      StaticText.screen.redemption_centre.content.register_product,
                    color: Colors.azure_radiance_1,
                    route: WARENTY_REGISTRATION_PACKAGE_QR_CODE,
                  }}
                  onPress={() =>onPress(WARENTY_REGISTRATION_PACKAGE_QR_CODE)}
                />

                <ProfileButtonsModal
                  key={`prof-button-${Math.random()}`}
                  menu={{
                    name: "invite_friends",
                    label: StaticText.screen.redemption_centre.content.invite_friends,
                  }}
                  onPress={onShare}
                />
            
            </View>
          </View>
        </Modal>
      )}
      <Pressable
        style={styles.btnBox}
        onPress={() => showModalView(!modalView)}
      >
        <Plus />
        <Text style={styles.textBannerSmall}>
          {StaticText.screen.my_profile.content.earn_more_points}
        </Text>
      </Pressable>
    </>
  );
};

export default RedemptionCenterModal;
