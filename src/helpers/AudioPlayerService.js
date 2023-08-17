import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player';
class AudioPlayerService {
    _trackPlayer;
    constructor() {
        this.init();
    }

    init = async () => {
        if (this._trackPlayer) {
            return TrackPlayer;
        }
        this._trackPlayer = TrackPlayer;

        await this.setupPlayer();
        this.updateOptions({
            android: {
                appKilledPlaybackBehavior:
                    AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
            },
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
                Capability.SeekTo
            ],
            compactCapabilities: [Capability.Play, Capability.Pause]
        });
    };

    setupPlayer = async () => {
        await this._trackPlayer.setupPlayer()
    }

    updateOptions = async function (options) {
        await this._trackPlayer.updateOptions(options);
    };

    addSongs = async (songs) => {
        return await this._trackPlayer.add(songs);
    };

    setupSongs = async (songs) => {
        await this.reset();
        await this.addSongs(songs);
    };

    setupSleepOrMeditation = async (sleepOrMeditation) => {
        await this.reset();
        await this.addSongs(sleepOrMeditation);
    };

    setupAlarmSongs = async (alarmSongs) => {
        await this.reset();
        for (let i = 0; i < alarmSongs.length; i++) {
            await this.addSongs(alarmSongs[i]);
        }
    };

    play = async () => {
        await this._trackPlayer.play();
    };

    seekTo = async (seconds) => {
        await this._trackPlayer.seekTo(seconds);
    };

    getQueue = async () => {
        return await this._trackPlayer.getQueue();
    };

    pause = async () => {
        await this._trackPlayer.pause();
    };

    stop = async () => {
        await this._trackPlayer.reset();
    };

    reset = async () => {
        return await this._trackPlayer.reset();
    };

    skip = async (index) => {
        try {
            await this._trackPlayer.skip(index);
        } catch (e) {
           
        }
    };

    skipToNext = async () => {
        try {
            await this._trackPlayer.skipToNext();
        } catch (e) {
          
        }
    };

    skipToPrevious = async () => {
        try {
            await this._trackPlayer.skipToPrevious();
        } catch (e) {
           
        }
    };
}

const audioPlayerService = new AudioPlayerService();
export default audioPlayerService;