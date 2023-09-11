import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import moment from "moment/moment";
import { MESSAGE_DETAILS } from "../../../../constants/RouteNames";

const ListItem = ({ item, onPress, readStatus }) => {
  return (
    <Pressable
      onPress={() => {
        onPress(MESSAGE_DETAILS, {
          messageId: item?.id,
        })
      }}
      unstable_pressDelay={100}
    >
      <View style={styles.mainBodyWrap}>
        <View style={styles.messageCard}>
          <View style={styles.messageContentWrap}>
            {item?.read_status <= 0 ? (!readStatus.includes(item?.id) ?  <View style={styles.listDots}></View> : <></>):<></>}
            <View style={styles.messageContent}>
              <Text style={styles.textContent} numberOfLines={2}>{item?.message}</Text>
              <View style={styles.messageMeta}>
                <Text style={styles.textContent}>
                  {moment(item?.created_at).format("dddd")}
                </Text>
                <View style={styles.metaDots}></View>
                <Text style={styles.textContent}>
                  {moment(item?.created_at).format("HH:mm")}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.messageInfo}>
            <LinearGradient
              colors={["#4874F7", "#83A7FE"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.messageCategory}
            >
              <Text style={styles.textMessageCategory}>
                {item?.message_category?.name}
                {/* Untuk Kamu */}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default ListItem;
