import {
    SafeAreaView,
    ImageBackground,
    View,
    Pressable,
    Modal,
    Dimensions,
    ActivityIndicator,
} from "react-native"
import { Video } from 'expo-av'
import { useState } from "react"
import YoutubePlayer from "react-native-youtube-iframe"
import LinearGradient from 'react-native-linear-gradient';
import AppSettings from "../../../../global/AppSettings"
import CloseIcon from "../../SvgImg/CloseIcon"
import styles from "./style"
import Colors from "../../../../global/Colors"
const {height,weight} = Dimensions.get('window')

const VideoModal = ({
    videoProp,
    showVideoModal,
    showModal
}) => {

    const [loader, showLoader] = useState(false)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => showVideoModal(!showModal)}
        >
            <SafeAreaView style={[styles.modalWrap]}>
                <View style={[styles.headerContent, { position: 'absolute', zIndex: 1000, top: height*0.05, }]}>
                    <Pressable onPress={() => showVideoModal(!showModal)}>
                        <CloseIcon />
                    </Pressable>
                </View>
                {videoProp.url.match(/youtube/) &&
                    <View style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <YoutubePlayer
                            height={300}
                            play={showModal}
                            videoId={videoProp.url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1]}
                        />
                    </View>
                }
                
                {/* <ImageBackground
                    source={AppSettings.background_image}
                    style={[styles.modalBgWrap, { position: 'absolute', width: '100%', }]}
                > */}
                <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']} style={[styles.modalBgWrap, { position: 'absolute', width: '100%', }]}>
                    <SafeAreaView style={[styles.containerWrap]}>
                        <View style={[styles.cardWrap]}>
                            {
                                videoProp.url.match(/mp4|MP4|mov|MOV|dyntube/) &&
                                <Video
                                    source={{
                                        uri: videoProp.url,
                                    }}
                                    shouldPlay={showModal}
                                    rate={1.0}
                                    volume={1.0}
                                    resizeMode="cover"
                                    useNativeControls
                                    style={{ width: Dimensions.get('screen').width, height: 300 }}
                                    posterSource={{
                                        uri: videoProp.poster
                                    }}
                                    onLoad={() => showLoader(false)}
                                    onLoadStart={() => showLoader(true)}
                                />
                            }

                            {loader &&
                                <View style={styles.iconWrap}>
                                    <ActivityIndicator size="large" color={Colors.royal_blue} />
                                </View>
                            }
                        </View>
                    </SafeAreaView>
                    </LinearGradient>
                {/* </ImageBackground> */}
            </SafeAreaView>
        </Modal >
    )
}
export default VideoModal