import { View, ImageBackground, ScrollView, ActivityIndicator, Pressable, Text, Linking } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { TERMS_AND_CONDITIONS } from "../../../constants/RouteNames"
import AppSettings from '../../../global/AppSettings'
import Container from '../../Helper/Container'
import NavigationHeader from '../../Helper/NavigationHeader'
import Input from '../../Helper/Form/Input'
import CalendarModal from '../../Helper/Modal/CalendarModal'
import StepInfoCard from '../../Helper/StepInfoCard'
import InfoWrap from '../../Helper/InfoWrap'
import StaticText from '../../../global/StaticText'
import styles from './RegisterWarrantyStyle'
import ModelNumberModal from '../../Helper/Modal/ModelNumberModal'
import InformationWhite from '../../Helper/SvgImg/InformationWhite'
import LinearGradient from 'react-native-linear-gradient'
import env from '../../../config/env'

const RegisterWarranty = ({
    data,
    loading,
    serialNo,
    onPress,
    onChange,
    onSubmit,
    form,
    errors,
    error,
    modelData,
    modelLoading,
}) => {
    return (
        <Container style={styles.container}>
            {/* <ImageBackground
                resizeMode="cover"
                style={[styles.overlayWrap]}
                source={AppSettings.background_inner_image}
            > */}
            <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
                <SafeAreaView style={styles.mainWrap}>
                    <NavigationHeader
                        previousBtnOnpress={() => onPress()}
                        previosPageLabel={StaticText.screen.warranty.navigation_prev}
                        nextBtnOnpress={onSubmit}
                        nextPageLabel={StaticText.screen.warranty.navigation_next}
                    />
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <View style={styles.contentWrap}>

                            <StepInfoCard
                                labelTxt={StaticText.screen.warranty.step_1.heading}
                                infoContent={StaticText.screen.warranty.step_1.content}
                                pogressBarStyle={styles.gradient}
                            />

                            <View style={styles.inputWrap}>
                                <ModelNumberModal
                                    wrapperStyle={[styles.inputUser]}
                                    heading={StaticText.screen.warranty.step_1.form.model_no}
                                    value={
                                        form?.model_no ? form?.model_no : ``
                                    }
                                    fields={modelData?.produt_models}
                                    loadStatus={modelLoading}
                                    onSelect={(value) => {
                                        onChange({ name: "model_no", value });
                                    }}
                                    style={styles}
                                    error={
                                        errors?.model_no ||
                                        error?.model_no?.[0]
                                    }
                                />

                                {/* <Input
                                    wrapperStyle={styles.inputUser}
                                    labelText={StaticText.screen.warranty.step_1.form.model_no}
                                    labeStyle={styles.inputAutoText}
                                    inputContainerStyle={''}
                                    onChangeText={
                                        value => {
                                            onChange({ name: 'model_no', value })
                                        }
                                    }
                                    inputStyle={styles.TextInput}
                                    value={form?.model_no}
                                    error={errors?.model_no || error?.model_no?.[0]}
                                /> */}

                                <Input
                                    wrapperStyle={styles.inputUser}
                                    labelText={StaticText.screen.warranty.step_1.form.serial_no}
                                    labeStyle={styles.inputAutoText}
                                    inputStyle={styles.TextInput}
                                    onChangeText={
                                        value => {
                                            onChange({ name: 'serial_no', value })
                                        }
                                    }
                                    inputContainerStyle={''}
                                    value={form?.serial_no}
                                    error={errors?.serial_no || error?.serial_no?.[0]}
                                />

                                <View style={styles.inputUser}>
                                    <CalendarModal
                                        labeStyle={styles.inputAutoText}
                                        inputContainerStyle={styles.calenderWrap}
                                        inputStyle={styles.TextInput}
                                        heading={StaticText.screen.warranty.step_1.form.purchase_date}
                                        value={form?.date_of_purchase ? form?.date_of_purchase : ``}
                                        onSelect={(value) => {
                                            value?.length && onChange({ name: "date_of_purchase", value });
                                        }}
                                        style={styles}
                                        error={errors?.date_of_purchase || error?.errors?.date_of_purchase?.[0]}
                                    />
                                </View>

                                <Input
                                    wrapperStyle={styles.inputUser}
                                    labelText={StaticText.screen.warranty.step_1.form.seller_name}
                                    labeStyle={styles.inputAutoText}
                                    inputContainerStyle={''}
                                    inputStyle={styles.TextInput}
                                    value={form?.seller_name}
                                    returnKeyType="go"
                                    onSubmitEditing={onSubmit}
                                    onChangeText={
                                        value => {
                                            onChange({ name: 'seller_name', value })
                                        }
                                    }
                                    error={errors?.seller_name || error?.seller_name?.[0]}
                                />
                            </View>

                            <View style={styles.warrantyWrap}>
                                <InformationWhite />
                                <Text style={styles.inputWarrantyText} onPress={() => {
                                    Linking.openURL(`${env.WEB_URL}/page/terms-conditions`);
                                }}>The following <Text style={styles.buttonLinkText}>warranty terms and conditions</Text> apply to this product</Text>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
                {loading &&
                    <View style={styles.icoLoader}>
                        <ActivityIndicator size="large" color={AppSettings.activity_indicator_color} />
                    </View>
                }
                </LinearGradient>
            {/* </ImageBackground> */}
        </Container>
    )
}
export default RegisterWarranty