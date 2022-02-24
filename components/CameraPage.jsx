import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const CameraPage = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [userPhoto, setUserPhoto] = useState(null);
  let camera;

  console.log(auth.currentUser);

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
  };

  if (hasPermission === false) {
    return <View />;
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera
        autoFocus
        style={styles.camera}
        type={type}
        ref={(ref) => (camera = ref)}
      >
        <View style={styles.cameraBtnsContainer}>
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
  cameraBtnsContainer: {
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
