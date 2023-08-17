import { View, Image, Text, Pressable } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { NEWS_DETAILS } from "../../../../constants/RouteNames"
import styles from "./style"
import AppSettings from '../../../../global/AppSettings'

const NewsCardHorizental = ({ item, onPress }) => {
    return (
        <Pressable onPress={() => onPress(NEWS_DETAILS, {
            news_slug: item?.slug
        })} unstable_pressDelay={200}>
            <View style={styles.newsSliderBox}>
                <Image
                    source={{
                        uri: item?.news_image,
                    }}
                    loadingIndicatorSource={AppSettings.loader_image}
                    style={styles.slidebg}
                    resizeMode="cover"
                    resizeMethod="resize"
                />
                <LinearGradient colors={["rgba(3, 10, 26, 0) 0%", "#040A1B"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.newsslideboxOverlay}>
                    <Text style={styles.newsslideboxOverlayInner}>{item?.name}</Text>
                    <View style={styles.newsMeta}>
                    <View style={styles.categoryWrappOuter}>
                        {item?.news_categories?.length && item?.news_categories?.map(data => 
                        <View style={styles.categoryTag} key={`card-cat-list-${item?.id}-${data?.id}${Math.random()}`}>
                            <Text style={styles.captionWrap}>{data?.name}</Text>
                        </View>)}</View>
                        
                        {item?.time?.length && <Text style={styles.captionWrap}>{item?.time}</Text>}
                    </View>
                </LinearGradient>
            </View>
        </Pressable>
    )
}
export default NewsCardHorizental