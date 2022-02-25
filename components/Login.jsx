import { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import Logo from './Home/Logo';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../src/firebase';

const { width, height } = Dimensions.get('screen');


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const signin = () => {
    // Need to implement User authentication with Firebase?
    // When logged in the menu needs to change to the loggedInMenu
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials)
      navigation.navigate('Home')
    setEmail('');
    setPassword('');
    })
    .catch((err) => {
      console.log(err)
    })
   
    
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log(userCredentials)
      navigation.navigate('Home')
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.loginCard}>
        <Logo />
        <TextInput
          style={{ ...styles.loginInput, marginTop: 20 }}
          value={email}
          placeholder='Email address'
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.loginInput}
          value={password}
          placeholder='Password'
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button btnText={'Login'} onSubmit={signin} />
      </View>
      <TouchableOpacity onPress={register}>
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '30%',
    backgroundColor: '#fff',
  },
  loginHeader: {
    fontSize: 22,
    marginBottom: 20,
  },
  loginCard: {
    alignItems: 'center',
    width: width,
  },
  loginInput: {
    width: '65%',
    marginBottom: 18,
    padding: 9,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc9c9',
  },
  register: {
    fontSize: 17,
    color: '#0000ff',
  },
});
