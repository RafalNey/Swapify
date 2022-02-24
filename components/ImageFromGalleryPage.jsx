import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageFromGalleryPage = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  // allowing to go to the Gallery
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  if (hasGalleryPermission === null) {
    return <View />;
  }
  if (hasGalleryPermission === false) {
    return <Text>No access to the Internal Storage</Text>;
  }

  // picking an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title='Pick Image'
        onPress={() => pickImage()}
      />
      {image && <Image source={{ uri: image }} style={{ flex: 1 / 2 }} />}
    </View>
  );
};

export default ImageFromGalleryPage;

// styles part
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
