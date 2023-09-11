import { View, Image, Text, Pressable } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { NEWS_DETAILS } from "../../../../constants/RouteNames"
import moment from 'moment'
import styles from "./style"
import AppSettings from '../../../../global/AppSettings'

const ListItem = ({ item, onPress }) => {
    return (
        <Pressable style={styles.newsCard} onPress={() => onPress(NEWS_DETAILS, {
            news_slug: item?.slug
        })} unstable_pressDelay={200}>
            <View style={styles.newsCardContent}>
            <View style={styles.categoryWrappOuter}>
                {item?.news_categories?.length > 0 && item?.news_categories?.map(data => 
                
                
                <LinearGradient
                    colors={[data?.colour_code1?.length ? data?.colour_code1 : "#4874F7", data?.colour_code2?.length ? data?.colour_code2 : "#83A7FE"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.categoryTagCard}
                    key={`cat-list-${item?.id}-${data?.id}${Math.random()}`}
                >
                    <Text style={styles.textCardSmall}>{data?.name}</Text>
                </LinearGradient>)}</View>



                <Text style={styles.textCardNews} numberOfLines={3}>{item?.name}</Text>
                <Text style={styles.textCardSmall}>
                    {moment(item.created_at).format("DD MMM YYYY")}
                </Text>
            </View>
            {item?.news_image &&
                <Image
                    source={{
                        uri: `${item.news_image}`,
                    }}
                    loadingIndicatorSource={AppSettings.loader_image}
                    style={styles.newsCardImg}
                    resizeMode="cover"
                    resizeMethod="resize"
                />
            }
        </Pressable>
    )
}
export default ListItem