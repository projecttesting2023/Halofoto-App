import { useState } from "react";
import { Text, Pressable, View, Modal } from "react-native";
import CloseIcon from "../../SvgImg/CloseIcon";
import styles from "./style";
import StaticText from "../../../../global/StaticText";

const VoucherCodeModal = ({
  data,
  heading,
  value,
  fields,
  onSelect,
  style,
  error,
}) => {
    const [modalView, showModalView] = useState(false)
  return (
    <>
      {modalView && 
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalView}
          onRequestClose={() => {
            showModalView(!modalView);
          }}
        >
          <View style={styles.codeWrap}>
            <Pressable style={styles.seeMoreWrap} onPress={() => showModalView(!modalView)}>
              <Text style={styles.textSeeMore}>
                {StaticText.screen.voucher_details.content.hide_code}
              </Text>
            </Pressable>
            <View style={styles.codeWrapInner}>
              <Text style={styles.textCodeInner}>
                {StaticText.screen.voucher_details.content.heading}
              </Text>
              <Text style={styles.textCode}>{data?.voucher?.voucher_code}</Text>
              <Text style={styles.textCodeInnerBottom}>
                {StaticText.screen.voucher_details.content.valid_until}{" "}
                {data?.voucher_details?.expiry_date}
              </Text>
            </View>
          </View>
        </Modal>
      }
      <Pressable style={styles.seeVoucherWrap} onPress={() => showModalView(!modalView)}>
        <Text style={styles.textSeeMore}>{StaticText.screen.voucher_details.content.see_code}</Text>
      </Pressable>
    </>
  );
};

export default VoucherCodeModal;
