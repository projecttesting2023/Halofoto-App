import { View, TouchableOpacity, Text, Animated, StatusBar } from "react-native"
import Colors from "../../../global/Colors"
import ArrowBack from "../../Helper/SvgImg/ArrowBack"
import styles from "./style"

const NavigationHeader = ({
  previousBtnOnpress,
  previosPageLabel,
  nextBtnOnpress,
  nextPageLabel,
  AnimatedHeader,
  headerMaxHeight,
  headerMinHeight,
}) => {

  // const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

  //  const animatedHeaderBackgroundColor = AnimatedHeader.interpolate({
  //   inputRange: [0, headerMaxHeight],
  //   outputRange: ['rgba(255,255,255,0)', Colors.header],
  //   extrapolate: "clamp",

  // })

  // const animatedHeaderHeight = AnimatedHeader.interpolate({
  //   inputRange: [0, headerMaxHeight],
  //   outputRange: [headerMaxHeight, headerMinHeight],
  //   extrapolate: "clamp",
  // })



  return (
    <>
      {/* <AnimatedStatusBar
        backgroundColor={animatedHeaderBackgroundColor}
      /> */}

      {/* <View style={[styles.topHeader, {
        height: animatedHeaderHeight,
        backgroundColor: animatedHeaderBackgroundColor,
      }]}> */}
      <View style={[styles.topHeader]}>
        <View style={styles.titleHolder}>
          <TouchableOpacity style={styles.backWrap} onPress={previousBtnOnpress}>
            <ArrowBack />
            <Text style={styles.pageHeading}>{previosPageLabel}</Text>
          </TouchableOpacity>
        </View>
        {nextPageLabel != "" && (
          <TouchableOpacity style={styles.NextWrap} onPress={nextBtnOnpress}>
            <Text style={styles.NextText}>{nextPageLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  )
}

export default NavigationHeader
