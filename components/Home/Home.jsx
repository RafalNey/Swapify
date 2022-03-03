import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native';
import Logo from './Logo';
import ItemsSlider from './ItemsSlider';
import HomeVideo from './HomeVideo';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        <StatusBar default />
        <Logo />

        <View style ={styles.welcomeMessage}>
          <Text style={styles.welcomeText}>Get rid of unwanted stuff and we won't charge you a penny!</Text>
          <Text></Text>
          <Text style={styles.welcomeText}>Done with it? SWAPIFY it!</Text>
          <Text style={styles.welcomeText}>Get started today!</Text>
        </View>
        <HomeVideo navigation={navigation} />
        <View style={styles.sliderContainer}>
        <ItemsSlider />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingVertical: '5%',
    backgroundColor: '#D1D1D1',
  },

  welcomeMessage: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 30,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
    
  },

  sliderContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 30,
  }
});
