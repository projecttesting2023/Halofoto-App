import { useNavigation } from "@react-navigation/native"
import { useContext, useEffect, useState, useRef } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
// import audioPlayerService from "../../../helpers/AudioPlayerService"

import { Audio } from 'expo-av';
import SettingsScreen from "../../../screens/Common/Settings"
import StaticText from "../../../global/StaticText"
import { GlobalContext } from "../../../context/Provider"
import settings from "../../../context/actions/common/settings"
import { SETTINGS_WEB_FRAME } from "../../../constants/RouteNames"
import env from "../../../config/env"
import { Linking } from "react-native"


const Settings = () => {
  const { navigate } = useNavigation()
  const onPress = (route) => navigate(route)

  const songs = [
    { id: 1, title: StaticText.screen.settings.tracks.track_1.label, duration: "2", track: require("../../../assets/sounds/notification.wav"), artist: StaticText.site_title, channel_id: 'halofoto_notify_ch3', sound: 'notification3' }
  ]

  const { settingsState: { error, loading, data }, settingsDispatch } = useContext(GlobalContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentNotificationSound, setCurrentNotificationSound] = useState(null)
  const [trackLoaded, setTrackLoaded] = useState(false);
  const [trackLoading, setTrackLoading] = useState(false);
  const [trackCurrentSong, setTrackCurrentSong] = useState(songs[0]);
  const [trackFinished, setTrackFinished] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    loadAudio();
    trackFinished && setTrackFinished(false)
    return () => unloadSong();
  }, [trackCurrentSong, trackFinished]);


  const onPlaybackStatusUpdate = async (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      setTrackFinished(true)
    }
  }

  const unloadSong = async () => {
    await sound.current.unloadAsync();
  };


  const loadAudio = async () => {
    setTrackLoaded(false);
    setTrackLoading(true);
    const checkLoading = await sound.current.getStatusAsync();

    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          trackCurrentSong.track,
          {},
          true
        );
        if (result.isLoaded === false) {
          setTrackLoading(false);
        } else {
          setTrackLoading(false);
          setTrackLoaded(true);
        }
      } catch (error) {
        setTrackLoading(false);
      }
    } else {
      setTrackLoading(false);
    }
  };


  const playAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          sound.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        }
      }
    } catch (error) {
    }
  };

  const pauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {
    }
  };


  const onPressFrame = async url => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const user = await AsyncStorage.getItem("user")
        if (!!user) {
          let user_data = JSON.parse(user)
          setIsLoggedIn(!!user)
          setCurrentNotificationSound(user_data?.notification_sound)
        }
      } catch (error) {
      }
    })()
  }, [])

  const previewNotification = async song => {
    if (!!currentNotificationSound) {
    // if (currentNotificationSound == song?.sound) {
      setCurrentNotificationSound(null)
      settings({})(settingsDispatch)(response => { })
    } else {
      setCurrentNotificationSound(song.sound)
      await playAudio()
      // await audioPlayerService.reset()
      // await audioPlayerService.addSongs(song)
      // await audioPlayerService.play()
      // // await audioPlayerService.updateOptions()
      settings(song)(settingsDispatch)(response => { })
    }
  }

  const navMenus = [
    {
      name: 'terms_&_condition',
      label: StaticText.screen.settings.tabs.terms_and_condition,
      navigation: SETTINGS_WEB_FRAME,
      url: `${env.WEB_URL}/page/terms-conditions`
    },
    {
      name: 'privacy_policy',
      label: StaticText.screen.settings.tabs.privacy_policy,
      navigation: SETTINGS_WEB_FRAME,
      url: `${env.WEB_URL}/page/privacy-policy`
    },
  ]


  return (
    <SettingsScreen
      onPress={onPress}
      onPressFrame={onPressFrame}
      navMenus={navMenus}
      songs={songs}
      previewNotification={previewNotification}
      loading={loading}
      currentNotificationSound={currentNotificationSound}
      isLoggedIn={isLoggedIn}
      trackLoading={trackLoading}
    />
  )
}

export default Settings
