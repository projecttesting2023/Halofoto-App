import { Text, Pressable, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../global/Colors";
import styles from "./style";
import AppSettings from "../../../../global/AppSettings";

const RoundedCornerReferralButton = ({
  onPress,
  label,
  disabled,
  showLoader,
  ...props
}) => {
    
  return (
    <Pressable onPress={() => onPress()} disabled={disabled ? disabled : false}>
      {disabled ? (
        <LinearGradient
          colors={[Colors.silver_chalice, Colors.silver_chalice]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >
          <Text style={styles.labelTxt}>{label}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >
          <Text style={styles.labelTxt}>{label}</Text>
          {showLoader && <ActivityIndicator size="small" color={AppSettings.activity_indicator_color} />}
        </LinearGradient>
      )}
    </Pressable>
  );
};

export default RoundedCornerReferralButton;
