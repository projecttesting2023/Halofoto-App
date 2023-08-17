import { LinearGradient } from "expo-linear-gradient"
import {
    SafeAreaView,
    Image,
    ImageBackground,
    Text,
    View,
    Pressable,
    ActivityIndicator,
    ScrollView,
    useWindowDimensions,
} from "react-native"
import RenderHtml from 'react-native-render-html'
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import BackBtn from "../../../screens/Helper/SvgImg/BackBtn"
import styles from "./singleProductStyle"
import { MY_PRODUCT_LIST } from "../../../constants/RouteNames"

import moment from "moment"
import Colors from "../../../global/Colors"
import NavTextButtons from "./NavTextButtons"

const SingleProduct = ({
    data,
    loading,
    onPress,
    showCertificate,
    setShowCertificate,
    onPressTab,
    navTextMenus,
}) => {

    const { width } = useWindowDimensions()
    const productDescriptionInfo = {
        html: `<div style="color:white;word-wrap:break-word;font-size:16px;">${data?.technical_information?.description?.length ? data?.technical_information?.description : ``}</div>`
    }

    const productCertificationInfo = {
        html: `<div style="color:white;word-wrap:break-word;font-size:16px;">${data?.certificate?.description?.length ? data?.certificate?.description : ``}</div>`
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.overlayWrap}
                source={AppSettings.background_inner_image_dark}
            >
                <SafeAreaView>
                    <View style={styles.topHeader}>
                        <Pressable
                            style={styles.titleHolder}
                            onPress={() => onPress(MY_PRODUCT_LIST)}
                        >
                            <View style={styles.backWrap}>
                                <BackBtn />
                            </View>
                            <Text style={styles.pageHeading}>
                                {StaticText.screen.my_product_details.heading}
                            </Text>
                        </Pressable>
                        <View style={styles.fileIco}>
                            <Pressable style={styles.buttonWrap}></Pressable>
                        </View>
                    </View>
                    <ScrollView style={styles.mainScroll}>
                        <View style={styles.mainBodyWrap}>
                            {loading ? (
                                <ActivityIndicator size="large" color={Colors.royal_blue} />
                            ) : (
                                <>
                                    <View style={styles.productsWrap}>
                                        <Image
                                            style={styles.image}
                                            resizeMode={"cover"}
                                            source={{ uri: data?.product?.product_images[0]?.path }}
                                        />
                                    </View>
                                    <Text style={styles.textProductName}>
                                        {data?.product?.name}
                                    </Text>

                                    <Text style={styles.textProductCategoryName}>
                                        {data?.product?.product_categories[0]?.name}
                                    </Text>

                                    <View style={styles.serialNumber}>
                                        <Text style={styles.textSerial}>
                                            {StaticText.screen.my_product_details.content.sn} : {data?.product?.product_serials?.serial}
                                        </Text>
                                    </View>

                                    <View style={styles.validUntil}>
                                        <View style={styles.dootsList}></View>
                                        <Text style={styles.textDateWrap}>
                                            {StaticText.screen.my_product_details.content.expiry_date}
                                        </Text>
                                        <Text style={styles.textDate}>
                                            {moment(data?.product?.date_of_expiry).format("DD MMM 'YY")}
                                        </Text>
                                    </View>

                                    <View style={styles.lensInfo}>
                                        {navTextMenus.length && navTextMenus.map((menu, index) => <NavTextButtons key={menu.name} menu={menu} item={data} onPress={onPress} onPressTab={onPressTab} />)}
                                    </View>

                                    <View style={styles.tabWrap}>
                                        <Pressable
                                            style={!showCertificate ? styles.tabBtnActive : styles.tabBtn}
                                            onPress={() => setShowCertificate(false)}
                                        >
                                            {!showCertificate ? <LinearGradient
                                                colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.btnActive}
                                            >
                                                <Text style={styles.textCategoryWrap}>
                                                    {StaticText.screen.my_product_details.content.details}
                                                </Text>
                                            </LinearGradient> : <Text style={styles.textCategoryWrap}>
                                                {StaticText.screen.my_product_details.content.details}
                                            </Text>}
                                        </Pressable>
                                        <Pressable style={showCertificate ? styles.tabBtnActive : styles.tabBtn} onPress={() => setShowCertificate(true)}>
                                            {showCertificate ? <LinearGradient
                                                colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                style={styles.btnActive}
                                            >
                                                <Text style={styles.textCategoryWrap}>
                                                    {StaticText.screen.my_product_details.content.certificate}
                                                </Text>
                                            </LinearGradient> : <Text style={styles.textCategoryWrap}>
                                                {StaticText.screen.my_product_details.content.certificate}
                                            </Text>}
                                        </Pressable>
                                    </View>

                                    {showCertificate ? (
                                        <View style={styles.certificateWrap}>
                                            <Text style={styles.textCertWrap}>
                                                {StaticText.screen.my_product_details.content.md} : {data?.certificate?.model_no}
                                            </Text>
                                            <View style={styles.specificationWrapInner}>
                                                <Text style={styles.textInnerContent}>
                                                    {StaticText.screen.my_product_details.content.purchase_date}
                                                </Text>
                                                <Text style={styles.textInnerHeading}>
                                                    {moment(data?.product?.date_of_purchase).format("DD MMM YYYY")}
                                                </Text>
                                            </View>
                                            <View style={styles.specificationWrapInner}>
                                                <Text style={styles.textInnerContent}>
                                                    {StaticText.screen.my_product_details.content.expiry_date}
                                                </Text>
                                                <Text style={styles.textInnerHeading}>
                                                    {moment(data?.product?.date_of_expiry).format("DD MMM YYYY")}
                                                </Text>
                                            </View>
                                            <View style={styles.specificationWrapInner}>
                                                <Text style={styles.textInnerContent}>
                                                    {StaticText.screen.my_product_details.content.mobile_number}
                                                </Text>
                                                <Text style={styles.textInnerHeading}>
                                                    {data?.certificate?.phone}
                                                </Text>
                                            </View>
                                            <View style={styles.specificationWrapInner}>
                                                <Text style={styles.textInnerContent}>
                                                    {StaticText.screen.my_product_details.content.user_name}
                                                </Text>
                                                <Text style={styles.textInnerHeading}>
                                                    {data?.certificate?.registered_owner_name}
                                                </Text>
                                            </View>
                                            <View style={styles.textDataSmall}>
                                                <RenderHtml
                                                    contentWidth={width}
                                                    source={productCertificationInfo}
                                                    enableExperimentalMarginCollapsing={true}
                                                />
                                            </View>
                                        </View>
                                    ) : (
                                        <View style={styles.certificateWrap}>
                                            <View style={styles.textDataSmall}>
                                                <RenderHtml
                                                    contentWidth={width}
                                                    source={productDescriptionInfo}
                                                    enableExperimentalMarginCollapsing={true}
                                                />
                                            </View>

                                            <Text style={styles.textInfoTech}>
                                                {StaticText.screen.my_product_details.content.heading}
                                            </Text>

                                            <Text style={styles.textSpecification}>
                                                {StaticText.screen.my_product_details.content.specification}
                                            </Text>

                                            {data?.technical_information?.model && data?.technical_information?.model?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.my_product_details.content.model}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.model}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.focal_length && data?.technical_information?.focal_length?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.my_product_details.content.focal_length}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.focal_length}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.max_aperture && data?.technical_information?.max_aperture?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.my_product_details.content.max_aperture}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.max_aperture}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.angle_of_view && data?.technical_information?.angle_of_view?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.my_product_details.content.angle_of_view}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.angle_of_view}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.optical_construction && data?.technical_information?.optical_construction?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.my_product_details.content.optical_construction}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.optical_construction}
                                                    </Text>
                                                </View>
                                            }


                                            {data?.technical_information?.min_object_distance && data?.technical_information?.min_object_distance?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.min_object_distance}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.min_object_distance}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.max_magnification_ratio && data?.technical_information?.max_magnification_ratio?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.max_magnification_ratio}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.max_magnification_ratio}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.filter_size && data?.technical_information?.filter_size?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.filter_size}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.filter_size}
                                                    </Text>
                                                </View>
                                            }


                                            {data?.technical_information?.max_diameter && data?.technical_information?.max_diameter?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.max_diameter}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.max_diameter}
                                                    </Text>
                                                </View>
                                            }


                                            {data?.technical_information?.weight && data?.technical_information?.weight?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.weight}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.weight}
                                                    </Text>
                                                </View>
                                            }


                                            {data?.technical_information?.aperture_blades && data?.technical_information?.aperture_blades?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.aperture_blades}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.aperture_blades}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.min_aperture && data?.technical_information?.min_aperture?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.min_aperture}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.min_aperture}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.img_stabilization_performance && data?.technical_information?.img_stabilization_performance?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.img_stabilization_performance}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.img_stabilization_performance}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.standard_accessories && data?.technical_information?.standard_accessories?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.standard_accessories}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.standard_accessories}
                                                    </Text>
                                                </View>
                                            }


                                            {data?.technical_information?.compatible_mounts && data?.technical_information?.compatible_mounts?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.compatible_mounts}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.compatible_mounts}
                                                    </Text>
                                                </View>
                                            }

                                            {data?.technical_information?.additional_info && data?.technical_information?.additional_info?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.additional_info}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.technical_information?.additional_info}
                                                    </Text>
                                                </View>
                                            }
                                            
                                        </View>
                                    )}
                                </>)}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default SingleProduct
