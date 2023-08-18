import {
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { HOME } from "../../../constants/RouteNames";
import AppSettings from "../../../global/AppSettings";
import Container from "../../Helper/Container";
import NavigationHeader from "../../Helper/NavigationHeader";
import StepInfoCard from "../../Helper/StepInfoCard";
import InfoWrap from "../../Helper/InfoWrap";
import UploadDocument from "../../Helper/SvgImg/UploadDocument";
import CameraModal from "../../Helper/CameraModal";
import StaticText from "../../../global/StaticText";
import styles from "./UploadInvoiceStyle";
import Information from "../../Helper/SvgImg/Information";
import CloseIcon from "../../Helper/SvgImg/CloseIcon";
import TickGreen from "../../Helper/SvgImg/TickGreen";
import Colors from "../../../global/Colors";

const UploadInvoice = ({
  form,
  onPress,
  loading,
  onChange,
  onSubmit,
  pickDocument,
  setShowCamera,
  cameraRef,
  setCameraRef,
  errors,
  type,
  setType,
  camera,
  isFocused,
  resetFile
}) => {
  return (
    <Container style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={[styles.overlayWrap, styles.pageLoader]}
        source={AppSettings.background_inner_image}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView>
          <NavigationHeader
            previousBtnOnpress={() => onPress()}
            previosPageLabel={StaticText.screen.warranty.navigation_prev}
            nextBtnOnpress={((typeof errors?.invoice == "undefined" ||
              errors?.invoice == null) &&  form?.invoice?.name?.length) ? onSubmit : ''}
            nextPageLabel={((typeof errors?.invoice == "undefined" ||
              errors?.invoice == null) && form?.invoice?.name?.length) ? StaticText.screen.warranty.navigation_next : ''}
          />
          <ScrollView keyboardShouldPersistTaps={"handled"}>
            <View style={styles.contentWrap}>
              <StepInfoCard
                labelTxt={StaticText.screen.warranty.step_2.heading}
                infoContent={StaticText.screen.warranty.step_2.content}
                pogressBarStyle={styles.gradient}
              />
              <View style={styles.uploadDocument}>
                {typeof form.invoice != "undefined" ? (
                  <>
                    {typeof errors?.invoice != "undefined" &&
                      errors?.invoice != null ? (
                      <View style={styles.imageUpload2}>
                        <Information />
                        <Text style={styles.warningText}>
                          {StaticText.screen.warranty.step_2.form.file_size_error}
                        </Text>
                        <Text style={styles.buttonText}>
                          {form.invoice.name}
                        </Text>
                        <Pressable onPress={() => resetFile()}>
                          <CloseIcon />
                        </Pressable>
                      </View>
                    ) : (
                      <View style={styles.imageUpload}>
                        <TickGreen />
                        <Text style={styles.buttonText}>
                          {form?.invoice?.name}
                        </Text>
                        <Pressable onPress={() => resetFile()}>
                          <CloseIcon />
                        </Pressable>
                      </View>
                    )}
                  </>
                ) : (
                  <UploadDocument />
                )}
              </View>
              <View style={styles.uploadButtonWrap}>
                <Pressable
                  style={styles.addDocument}
                  onPress={() => setShowCamera(!camera)}
                >
                  <LinearGradient
                    colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buttonWrap}
                  >
                    <Text style={styles.buttonText}>
                      {StaticText.button.take_photo}
                    </Text>
                  </LinearGradient>
                </Pressable>
                <Text style={styles.uploadText}>
                  {StaticText.screen.warranty.step_2.form.text}
                </Text>
                <Pressable
                  style={styles.addDocument}
                  onPress={() => pickDocument()}
                >
                  <LinearGradient
                    colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buttonWrap}
                  >
                    <Text style={styles.buttonText}>
                      {StaticText.button.download_gallery}
                    </Text>
                  </LinearGradient>
                </Pressable>
              </View>

              {isFocused && camera && (
                <CameraModal
                  showModal={camera}
                  setModalVisible={() => setShowCamera(!camera)}
                  setImage={(result) => {
                    onChange({ name: "invoice", value: result });
                  }}
                  cameraRef={cameraRef}
                  setCameraRef={setCameraRef}
                />
              )}
              <InfoWrap
                containerStyle={styles.warrantyWrap}
                contentStyle={styles.inputWarrantyText}
                content={StaticText.screen.warranty.step_2.form.info}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        {loading && (
          <View style={styles.icoLoader}>
            <ActivityIndicator
              size="large"
              color={AppSettings.activity_indicator_color}
            />
          </View>
        )}
        </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  );
};
export default UploadInvoice;
