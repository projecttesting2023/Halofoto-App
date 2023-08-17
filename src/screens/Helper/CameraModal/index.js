import React from 'react'
import { View, Image, TouchableOpacity, Modal } from 'react-native'
import { Camera } from "expo-camera"
import AppSettings from '../../../global/AppSettings'
import styles from './styles'
import CloseIcon from '../SvgImg/CloseIcon'

const CameraModal = props => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                props.setModalVisible()
            }}
        >
            <Camera
                style={{ flex: 1 }}
                //ratio="16:9"
                //flashMode={Camera.Constants.FlashMode.on}
                type={props.type}
                ref={(ref) => {
                    props.setCameraRef(ref)
                }}
            >
                <View style={styles.wrapper}>
                <TouchableOpacity style={styles.iconCancel} onPress={() => {
                            props.setModalVisible()
                        }}>
                            <View>
                               <CloseIcon/>
                            </View>
                        </TouchableOpacity>
                    <View style={styles.innerWrapp} >
                        
                        <TouchableOpacity
                            onPress={async () => {
                                if (props.cameraRef) {
                                    let photo = await props.cameraRef.takePictureAsync()
                                    props.setImage(photo)
                                    props.setModalVisible()
                                }
                            }}
                        >
                            <View style={styles.clickWrapp}>
                                <View style={styles.clickWrappInner}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </Modal>
    )
}

export default CameraModal