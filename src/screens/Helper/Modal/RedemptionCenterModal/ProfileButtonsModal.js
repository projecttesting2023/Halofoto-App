import { Text, Animated, Pressable, View } from "react-native";
import styles from "./style";

const ProfileButtonsModal = ({
  menu = {
    name: ``,
    label: ``,
    route: ``,
  },
  onPress,
}) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start(() => onPress(menu?.route?.length ? menu?.route : ``));
  };

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      unstable_pressDelay={100} style={styles.tabButtonWrap}
    >
      <Animated.View style={[styles.tabOption, { opacity: animated }]}>
        {menu?.label?.length && (
          <Text style={styles.textTab}>{menu?.label}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};
export default ProfileButtonsModal;
