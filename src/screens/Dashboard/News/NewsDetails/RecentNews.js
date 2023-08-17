import {
    Image,
    Text,
    View,
    Pressable,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import moment from "moment"
import { NEWS_DETAILS } from "../../../../constants/RouteNames"
import styles from "./style"

const RecentNews = ({
    item,
    onPress,
}) => {
    return (
        <Pressable onPress={() => onPress(NEWS_DETAILS, item?.slug)}>
            <View style={styles.newsCard}>
                <View style={styles.newsCardContent}>
                    <Text style={styles.textCardDescription} numberOfLines={3}>
                        {item?.name}
                    </Text>
                    <View style={styles.categoryWrap}>
                    <View style={styles.categoryWrappOuter}>
                    {item?.news_categories?.length &&
                        item?.news_categories?.map(category => <LinearGradient
                            colors={[category?.colour_code1, category?.colour_code2]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.categoryTagCard}
                            key={category?.id}
                        ><Text style={{ fontSize: 11, color: "#fff", fontWeight: "400", }}>{category?.name}</Text></LinearGradient>)
                    }
                    </View>
                    </View>
                    <Text style={{fontSize: 11,color: "#fff",fontWeight: "400",}}>{moment(item?.created_at).format("DD MMM YYYY")}</Text>
                </View>
                <Image
                    source={{ uri: item?.news_image }}
                    style={styles.newsCardImg}
                    resizeMode="cover"
                    resizeMethod="resize"
                />
            </View>
        </Pressable>
    )
}
export default RecentNews