import { View, Text, Pressable } from "react-native";
import { TERMS_AND_CONDITIONS } from "../../../constants/RouteNames";
import InformationWhite from "../SvgImg/InformationWhite";
import styles from "./style";

const Container = ({ containerStyle, contentStyle, content, onPress }) => {
  return (
    <View style={[containerStyle]}>
      <InformationWhite />
      <Pressable
        style={styles.buttonText}
        onPress={() => onPress()}
      >
        <Text style={[contentStyle]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Container;
