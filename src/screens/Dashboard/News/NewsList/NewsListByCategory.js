import { useCallback } from "react"
import { LinearGradient } from "expo-linear-gradient"
import {
    SafeAreaView,
    Image,
    ImageBackground,
    Text,
    View,
    ActivityIndicator,
    Dimensions,
    FlatList,
} from "react-native"
import AppSettings from "../../../../global/AppSettings"
import Colors from "../../../../global/Colors"
import StaticText from "../../../../global/StaticText"

import ListItem from "./ListItem"
import styles from "./style"
import AnimatedHeader from "../../../Helper/AnimatedHeader"

const NewsListByCategory = ({
    newsData,
    data,
    loading,
    isLoading,
    onPress,
    onRefresh,
    refreshing,
    onEndReached,
    categoryName,
}) => {

    // const animation = useDynamicAnimation(() => {
    //     return {
    //         width: '100%',
    //         height: 445,
    //     }
    // })

    const renderNews = useCallback(
        ({ item }) => (
            <ListItem
                item={item}
                onPress={onPress}
            />
        ),
        []
    )

    const keyExtractor = useCallback(item => `cat-news-list-${item.id.toString()}${Math.random()}`, [])

    const listFooter = () => {
        return (
            <>
                {isLoading && (<ActivityIndicator size='large' color={Colors.royal_blue} style={{ marginBottom: 16 }} />)}
            </>
        )
    }

    const listHeader = () => {
        return (
            <>
                <View style={styles.categoryListBanner}>
                    <Image
                        source={AppSettings.category_news}
                        style={styles.newsCategorybannerbg}
                        resizeMode="cover"
                        resizeMethod="resize"
                    />
                    <LinearGradient
                        colors={["rgba(3, 10, 26, 0.5) 0%", "#0C1628"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.newsCategoryBannerOverlay}
                    >
                        <Text
                            style={{
                                fontSize: 36,
                                color: "#D3D4D5",
                                fontWeight: "300",
                                marginBottom: 16,
                                width: 189
                            }}
                        >
                            {`${StaticText.screen.news.category.heading} ${categoryName}`}
                        </Text>
                    </LinearGradient>
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.overlayWrap}
                source={AppSettings.background_inner_image_dark}
            >
                <SafeAreaView>

                    <AnimatedHeader
                        label={categoryName}
                        mainWrapperStyle={styles.topHeader}
                        innerWraperStyle={styles.titleHolder}
                        buttonWrapStyle={styles.backWrap}
                        labelStyle={styles.pageHeading}
                        onPress={onPress}
                    />

                    <View style={styles.mainScroll}>
                        <View style={styles.mainBodyWrap}>
                            {loading ? <ActivityIndicator size="large" color={Colors.royal_blue} /> :
                                data?.news?.data.length ? (
                                    <>
                                        <View style={[styles.newsCardWrap]}>
                                            <FlatList
                                                onRefresh={onRefresh}
                                                refreshing={refreshing}
                                                keyExtractor={keyExtractor}
                                                horizontal={false}
                                                data={newsData}
                                                maxToRenderPerBatch={Dimensions.get("screen").height}
                                                windowSize={Dimensions.get("screen").height}
                                                initialNumToRender={10}
                                                renderItem={renderNews}
                                                showsVerticalScrollIndicator={false}
                                                keyboardShouldPersistTaps="handled"
                                                decelerationRate="fast"
                                                onEndReachedThreshold={0.5}
                                                onEndReached={onEndReached}
                                                ListHeaderComponent={listHeader}
                                                ListFooterComponent={listFooter}
                                                // onScroll={e => setYAxisValue(e.nativeEvent.contentOffset.y.toFixed(0))}
                                            />
                                        </View>
                                    </>
                                ) : <></>
                            }
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default NewsListByCategory