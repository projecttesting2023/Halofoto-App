/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './src/helpers/track-player-remote-services';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => playbackService);