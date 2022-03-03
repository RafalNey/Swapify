import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const TeamLogo = () => {
  return (
    <View style={styles.teamLogoContainer}>
      <Text style={styles.teamText}>team</Text>
      <Image
        style={styles.teamLogo}
        source={require('../../images/team_logo.png')}
      />
      <FontAwesome5
        style={styles.copyright}
        name='copyright'
        size={15}
        color='black'
      />
    </View>
  );
};

export default TeamLogo;

const styles = StyleSheet.create({
  teamLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  teamText: {
    marginBottom: -10,
    marginRight: -5,
    fontSize: 18,
    fontWeight: '700',
  },
  teamLogo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  copyright: {
    marginTop: -20,
    marginLeft: -10,
  },
});
