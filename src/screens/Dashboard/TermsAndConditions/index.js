import {
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { LinearGradient } from "expo-linear-gradient"
import AppSettings from "../../../global/AppSettings"
import styles from "./style"

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.OverlayVoucher}
      >
        <SafeAreaView>
          <View style={styles.topHeader}>
            <View style={styles.titleHolder}>
              <TouchableOpacity style={styles.backWrap}>
                <Image source={AppSettings.BackBtn} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.pageHeading}>News</Text>
            </View>
          </View>
          <ScrollView style={styles.mainScroll}>
            <View style={styles.mainBodyWrap}>
              <View style={styles.categoryListBanner}>
                <Image
                  source={AppSettings.CategoryNews}
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
                    }}
                  >
                    SpaceX sends first regular Dragon Spaceship equipped with
                    Tamron XXASASA
                  </Text>

                  <View style={styles.newsMeta}>
                    <View style={styles.categoryTag}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#fff",
                          fontWeight: "400",
                        }}
                      >
                        Category 1
                      </Text>
                    </View>
                    <Text
                      style={{ fontSize: 11, color: "#fff", fontWeight: "400" }}
                    >
                      3 hours ago
                    </Text>
                  </View>
                </LinearGradient>
              </View>

              <View style={styles.newsDetailsWrap}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: "400",
                    marginBottom: 14,
                  }}
                >
                  One lens that covers wide-angle to ultra-telephoto – and
                  everything in between!
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: "400",
                    marginBottom: 14,
                  }}
                >
                  An all-in-one lens that zooms from wide-angle to ultra-
                  telephoto for Sony E and FUJIFILM X-mount
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: "400",
                    marginBottom: 14,
                  }}
                >
                  Finally, a zoom that lets you shoot everything from
                  ultra-telephoto to wide-angle, without changing lenses. The
                  18-300mm F/3.5-6.3 Di III-A VC VXD (Model B061) is an
                  all-in-one zoom lens for Sony E and FUJIFILM X-mount APS-C
                  mirrorless cameras.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: "400",
                    marginBottom: 14,
                  }}
                >
                  An all-in-one lens that zooms from wide-angle to ultra-
                  telephoto for Sony E and FUJIFILM X-mount
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: "400",
                    marginBottom: 14,
                  }}
                >
                  Finally, a zoom that lets you shoot everything from
                  ultra-telephoto to wide-angle, without changing lenses. The
                  18-300mm F/3.5-6.3 Di III-A VC VXD (Model B061) is an
                  all-in-one zoom lens for Sony E and FUJIFILM X-mount APS-C
                  mirrorless cameras.
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 22,
                  color: "#fff",
                  fontWeight: "500",
                  marginBottom: 14,
                  marginTop: 25,
                }}
              >
                Berita menarik lainnya
              </Text>
              <View style={styles.newsListWrap}>
                <View style={styles.newsCard}>
                  <View style={styles.newsCardContent}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Which fixed lens you should use for wildlife...
                    </Text>
                    <LinearGradient
                      colors={["#4874F7", "#83A7FE"]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.categoryTagCard}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#fff",
                          fontWeight: "400",
                        }}
                      >
                        News
                      </Text>
                    </LinearGradient>
                    <Text
                      style={{ fontSize: 11, color: "#fff", fontWeight: "400" }}
                    >
                      29 Jan 2023. 8:00 pm
                    </Text>
                  </View>
                  <Image
                    source={AppSettings.CategoryNews}
                    style={styles.newsCardImg}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />
                </View>
                <View style={styles.newsCard}>
                  <View style={styles.newsCardContent}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Which fixed lens you should use for wildlife...
                    </Text>
                    <LinearGradient
                      colors={["#F23E94", "#FE83DC"]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.categoryTagCard}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#fff",
                          fontWeight: "400",
                        }}
                      >
                        Gossip
                      </Text>
                    </LinearGradient>
                    <Text
                      style={{ fontSize: 11, color: "#fff", fontWeight: "400" }}
                    >
                      29 Jan 2023. 8:00 pm
                    </Text>
                  </View>
                  <Image
                    source={AppSettings.CategoryNews}
                    style={styles.newsCardImg}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />
                </View>
                <View style={styles.newsCard}>
                  <View style={styles.newsCardContent}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Which fixed lens you should use for wildlife...
                    </Text>
                    <LinearGradient
                      colors={["#EFA05D", "#F4B065"]}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      style={styles.categoryTagCard}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          color: "#fff",
                          fontWeight: "400",
                        }}
                      >
                        New Product
                      </Text>
                    </LinearGradient>
                    <Text
                      style={{ fontSize: 11, color: "#fff", fontWeight: "400" }}
                    >
                      29 Jan 2023. 8:00 pm
                    </Text>
                  </View>
                  <Image
                    source={AppSettings.CategoryNews}
                    style={styles.newsCardImg}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default TermsAndConditions
