import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useRef, useState, useEffect } from 'react';

const { width } = Dimensions.get('screen');
const videoW = width * 1.2;
const videoH = videoW * 0.5;

const HomeVideo = ({ navigation }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      video && video.current.playAsync();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      video && video.current.pauseAsync();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.videoContainer}>
      <View style={styles.videoOverlay}></View>
      <Video
        ref={video}
        style={styles.video}
        source={require('../../video/HomeVideo.mp4')}
        isMuted={true}
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};
export default HomeVideo;

const styles = StyleSheet.create({
  videoContainer: {
    position: 'relative',
    marginVertical: 20,
    height: videoH,
    width: videoW,
  },
  videoOverlay: {
    position: 'absolute',
    bottom: '2%',
    zIndex: 2,
    height: videoH - 16,
    width: videoW,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  video: {
    position: 'absolute',
    zIndex: 1,
    flex: 1,
    height: videoH,
    width: videoW,
  },
});
