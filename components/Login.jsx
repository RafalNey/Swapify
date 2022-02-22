import { useContext, useEffect, useState } from 'react';
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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { UserContext } from '../contexts/UserContext';

const { width, height } = Dimensions.get('screen');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDetails, setLoginDetails] = useState(null)
  const { isLoggedIn, loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigation = useNavigation();

  const signin = () => {
    setLoginDetails({email: email, password: password})
    
  }
  useEffect(() => {
    let isMounted = true
    loginDetails && signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
    .then((userCredentials) => {
      isMounted && setLoggedInUser(userCredentials);
        console.log(auth.currentUser);
        navigation.navigate('Home');
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
      });
      return () => {
        isMounted = false
      }
    }, [loginDetails])

  

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <Logo />
      <View style={styles.loginCard}>
        <TextInput
          style={{ ...styles.loginInput }}
          value={email}
          placeholder='Email address'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.loginInput}
          value={password}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
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
  loginCard: {
    alignItems: 'center',
    width: width,
    marginTop: 20,
  },
  loginInput: {
    width: '80%',

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
