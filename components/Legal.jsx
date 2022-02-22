import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { Paragraph } from 'react-native-paper';


const Legal = () => {
return (
    <ScrollView>
    <View style={styles.legalContainer}><Text style={styles.legalHeader}>Terms and Conditions</Text>
    <Text style={styles.legalHeader}>User Agreement</Text>
    <Text style={styles.legalSubheader}>Rights To Terminate</Text>
    <Text style={styles.legalSubheader}>Code of Conduct</Text>
    <Text style={styles.legalSubheader}>User Eligibility</Text>
    <Text style={styles.legalHeader}>Privacy Policy</Text>
    <Text style={styles.legalText}>
    We respect the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our application.   Please read this Privacy Policy carefully.</Text>
    <Text>IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION</Text>
    </View></ScrollView>
)
}

export default Legal;

const styles = StyleSheet.create({
legalContainer: {
    flex: 1,
    paddingTop: '5%',
    paddingHorizontal: '3%',
    backgroundColor: '#fff',
},
legalHeader: {
    alignSelf: 'flex-start',
    marginBottom: '10%',
    fontSize: 25,
  },
  legalSubheader: {
    alignSelf: 'flex-start',
    marginBottom: '10%',
    fontSize: 20,
  },
  legalText: {
    alignSelf: 'flex-start',
    marginBottom: '10%',
    fontSize: 16,
  },
})