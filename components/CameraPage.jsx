import { StyleSheet, AppState, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
// import { updateProfile } from 'firebase/auth';
// import { auth } from '../firebase';

const CameraPage = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [ratio, setRatio] = useState('4:3');
  const [userPhoto, setUserPhoto] = useState(null);
  let camera;

  const appState = useRef(AppState.currentState);

  const takePicture = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();
      setUserPhoto(uri);
      MediaLibrary.saveToLibraryAsync(uri);
      // userPhoto && updateProfile(auth.currentUser, { photoURL: userPhoto });
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const { status2 } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const closeCamera = () => {
    navigation.navigate('User', { userPhoto });
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
    setRatio(type === Camera.Constants.Type.back ? '4:3' : '1:1');
  };

  const openFlash = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  };

  if (hasPermission === false) {
    return <View />;
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ratio={ratio}
        ref={(ref) => (camera = ref)}
      >
        <View style={styles.cameraTopBtns}>
          <TouchableOpacity onPress={openFlash}>
            {flash ? (
              <Ionicons
                name='md-flash-sharp'
                size={40}
                color='rgba(255,255,255, 0.65)'
              />
            ) : (
              <Ionicons
                name='md-flash-off-sharp'
                size={40}
                color='rgba(255,255,255, 0.65)'
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.cameraBottomBtns}>
          <TouchableOpacity onPress={closeCamera}>
            <Ionicons
              name='arrow-back-circle-outline'
              size={57}
              style={styles.cameraBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.takePhotoBtn} onPress={takePicture}>
            <FontAwesome
              name='circle'
              size={80}
              color='rgba(255,255,255, 0.65)'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={flipCamera}>
            <MaterialIcons
              name='flip-camera-android'
              size={50}
              style={styles.cameraBtn}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  cameraTopBtns: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '3%',
  },
  cameraBottomBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: '20%',
  },
  takePhotoBtn: {
    borderWidth: 3,
    borderColor: 'rgba(255,255,255, 0.6)',
    borderRadius: 180,
    padding: 10,
    backfaceVisibility: 'hidden',
  },
  cameraBtn: {
    backfaceVisibility: 'hidden',
    color: 'rgba(255, 255, 255, 0.65)',
  },
});
