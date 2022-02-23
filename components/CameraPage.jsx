import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';

const { width, height } = Dimensions.get('screen');

const CameraPage = ({hasCameraPermission, setHasCameraPermission}) => {

  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const openCamera = () => {
      setHasCameraPermission('granted');
}

// allowing to use camera or not
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <Button onPress={openCamera} title='Open Camera'/>

  }
  if (hasCameraPermission === false) {
    return <Text>No access to the camera</Text>;
  }

// taking a photo
  const takePicture = async () => {
    if (camera) {
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }  
  }

  return (
    <View style={styles.container}>
    <Button onPress={openCamera} title='Close Camera'/>
    <View >     
        <Camera
        ref={ref => setCamera(ref)} 
        style={styles.fixedRatio} 
        type={type}
//      ratio={'1:1'}
        />
        <View style={styles.buttonContainer}>
        <Button style={styles.button}
             title="Flip Camera"
                  onPress={() => {
                  setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
          }}></Button>
          <Button style={styles.button}
                  title="Take Picture"
                  onPress={() => {takePicture()}}/>
                  {image && <Image source={{uri: image}} style={{flex: 1}}/>}
          </View>
    </View>
    </View>
  )  
}

export default CameraPage;

// styles part
const styles = StyleSheet.create({
  container: {
//    flex: 1,
  },
  cameraContainer: {
//    flex: 1,
//    flexDirection: 'row',
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  fixedRatio: {
//    flex: 1,
    aspectRatio: 1,
    height: height,
    width: width,
  },
  buttonContainer: {
//    flex: 1,
    backgroundColor: 'transparent',
//    margin: 20,
//    paddingBottom: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});