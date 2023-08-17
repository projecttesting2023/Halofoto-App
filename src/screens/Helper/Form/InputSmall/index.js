import { forwardRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Envelop from "../../SvgImg/Envelop";
import Eye from "../../SvgImg/Eye";
import CloseEye from "../../SvgImg/CloseEye";
import SingleMan from "../../SvgImg/SingleMan";
import Call from "../../SvgImg/Call";
import Location from "../../SvgImg/Location";
import Calendar from "../../SvgImg/Calendar";
import DownArrow from "../../SvgImg/DownArrow";

const InputSmall = forwardRef(
  (
    {
      wrapperStyle,
      labelText,
      labeStyle,
      inputStyle,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      multiLine,
      onChangeText,
      keyboardType,
      autoCapitalize,
      icon,
      inputContainerStyle,
      returnKeyType,
      autoFocus,
      innerRef,
      style,
      error,
      ...props
    },
    ref
  ) => {
    //const [focused, setFocused] = useState(false)
    const [secureView, setSecureView] = useState(
      secureTextEntry ? secureTextEntry : false
    );
    // const getBorderColor = () => {
    //     let color = focused ? Colors.royal_blue : Colors.link_water
    //     return { borderColor: color }
    // }

    return (
      <>
        <View style={styles.inputWrapModal}>
          <View style={[styles.inputWrappNumber]}>
            {labelText?.length && <Text style={[labeStyle]}>{labelText}</Text>}
            <View style={[inputContainerStyle, error && styles.errorWrap]}>
              <TextInput
                style={[inputStyle]}
                placeholder={placeholder ? placeholder : ""}
                placeholderTextColor={
                  placeholderTextColor ? placeholderTextColor : "#fff"
                }
                onChangeText={onChangeText}
                // onFocus={() => setFocused(true)}
                // onBlur={() => setFocused(false)}
                multiline={multiLine ? multiLine : false}
                secureTextEntry={secureView}
                keyboardType={keyboardType ? keyboardType : "default"}
                autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
                returnKeyType={returnKeyType ? returnKeyType : ""}
                autoFocus={autoFocus ? autoFocus : false}
                ref={ref}
                {...props}
              />
              {icon && icon === "singleman" && <SingleMan />}
              {icon && icon === "call" && <Call />}
              {icon && icon === "downarrow" && <DownArrow />}
              {icon && icon === "location" && <Location />}
              {icon && icon === "envelop" && <Envelop />}
              {icon && icon === "calendar" && <Calendar />}
              {icon && icon === "eye" && (
                <TouchableOpacity onPress={() => setSecureView(!secureView)}>
                  {secureView ? <Eye /> : <CloseEye />}
                </TouchableOpacity>
              )}
            </View>
          </View>

            {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </>
    );
  }
);

export default InputSmall;
