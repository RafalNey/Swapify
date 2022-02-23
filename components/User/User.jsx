import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, Fontisto } from '@expo/vector-icons';
import Button from '../Reusable/Button';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const { width, height } = Dimensions.get('screen');
const menuW = width * 0.5;
const menuH = menuW * 1;

const User = () => {
  const navigation = useNavigation();
  const { loggedInUser } = useContext(UserContext);

  const openCamera = () => {
    navigationHandler('Camera');
  };

  const navigationHandler = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.userContainer}>
      <View style={styles.userCard}>
        <SvgUri
          style={styles.userImg}
          uri={
            !loggedInUser.user.photoURL
              ? //createdAt could be changed to displayName - assume this will correspond to username once registration process is finished? Currently 'undefined'.
                `https://avatars.dicebear.com/api/avataaars/${loggedInUser.createdAt}
        .svg`
              : loggedInUser.user.photoURL
          }
        />

        <Fontisto
          style={styles.cameraIcon}
          name='camera'
          size={35}
          color='#6b6565'
          onPress={openCamera}
        />
      </View>
      <Text style={styles.userName}>{loggedInUser.user.displayName}</Text>
      <Text style={styles.userLocation}>
        <Ionicons name='md-location-sharp' size={20} color='#6b6565' />
        Manchester, UK
      </Text>
      <FontAwesome name='star-o' size={24} color='#000' />
      <View style={styles.showBtnsContainer}>
        <Button btnText={'My List'} navigationHandler={navigationHandler} />
        <Button btnText={'Swaps'} navigationHandler={navigationHandler} />
      </View>
    </SafeAreaView>
  );
};
export default User;

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  userCard: {
    position: 'relative',
    width: menuW + 31,
    height: menuH + 31,
    marginBottom: 20,
    borderRadius: 180,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .4)',
    backgroundColor: '#fff',
  },
  cameraIcon: {
    position: 'absolute',
    right: 12,
    zIndex: 2,
  },
  userImg: {
    width: menuW,
    height: menuH,
    alignSelf: 'center',
    borderRadius: 180,
  },
  userName: {
    fontSize: 22,
  },
  userLocation: {
    marginVertical: 10,
    fontSize: 18,
  },
  showBtnsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
});
