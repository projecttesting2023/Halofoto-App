import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Linking,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AppSettings from "../../../global/AppSettings";
import styles from "./style";
import ArrowBack from "../../Helper/SvgImg/ArrowBack";
import Information from "../../Helper/SvgImg/Information";
import Calender from "../../Helper/SvgImg/Calender";
import InformationWhite from "../../Helper/SvgImg/InformationWhite";
import { TERMS_AND_CONDITIONS } from "../../../constants/RouteNames";

const RegisterWarranty = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <ScrollView keyboardShouldPersistTaps={"handled"}>
              <View style={styles.topHeader}>
                <View style={styles.titleHolder}>
                  <TouchableOpacity style={styles.backWrap}>
                    <ArrowBack style={styles.backArrow} />
                  </TouchableOpacity>
                  <Text style={styles.pageHeading}>Register Warranty</Text>
                </View>
                <TouchableOpacity style={styles.NextWrap}>
                  <Text style={styles.NextText}>Next</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.contentWrap}>
                <View style={styles.cardWrap}>
                  <Text style={styles.cardTextHeader}>
                    Step 1 : Registration
                  </Text>
                  <View style={styles.cardContentWrap}>
                    {/* <Information style={styles.infoIcon} /> */}
                    <Text style={styles.cardText}>
                      Fill in the following information to get e-warranty.
                    </Text>
                  </View>
                  <View style={styles.loader}>
                    <LinearGradient
                      colors={["#114EED", "#6A50E7"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.gradient}
                    ></LinearGradient>
                  </View>
                </View>
                <View style={styles.inputWrap}>
                  <View style={styles.inputAuto}>
                    <Text style={styles.inputAutoText}>Model Number</Text>
                    <TextInput style={styles.TextInput}>
                      8 727 717 7271
                    </TextInput>
                  </View>
                  <View style={styles.inputAuto}>
                    <Text style={styles.inputAutoText}>Serial Number</Text>
                    <TextInput style={styles.TextInput}>
                      8 727 717 7271
                    </TextInput>
                  </View>
                  <View style={styles.inputUser}>
                    <Text style={styles.inputAutoText}>Parchase Date *</Text>
                    <View style={styles.calenderWrap}>
                      <TextInput style={styles.TextInput}>15/12/2022</TextInput>
                      <Calender />
                    </View>
                  </View>
                  <View style={styles.inputUser}>
                    <Text style={styles.inputAutoText}>Seller's name *</Text>
                    <TextInput style={styles.TextInput}>
                      Seller Super Store
                    </TextInput>
                  </View>
                </View>
                <View style={styles.warrantyWrap}>
                  <InformationWhite style={styles.infoIconWarranty} />
                  <Text style={styles.inputWarrantyText}>
                    The following{" "}
                    <Pressable
                      style={styles.buttonText}
                      onPress={() => onPress(TERMS_AND_CONDITIONS)}
                    >
                      {" "}
                      warranty terms and conditions
                    </Pressable>{" "}
                    apply to this product.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default RegisterWarranty;
