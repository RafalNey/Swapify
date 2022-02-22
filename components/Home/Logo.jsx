import { StyleSheet, Image, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.55;
const imageH = imageW * 0.55;

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../images/Logo.png')} style={styles.logo} />
    </View>
  );
};
export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    height: imageH,
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: imageW,
    height: imageH,
    resizeMode: 'contain',
  },
});
