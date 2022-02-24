import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import Logo from '../Home/Logo';
import Button from '../Reusable/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { formatErrorMsg } from '../Error';

const { width } = Dimensions.get('screen');

const onTermsOfUsePressed = () => {
  console.warn('Terms of Use');
};

const onPrivacyPolicyPressed = () => {
  console.warn('Privacy Policy');
};

const Register = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [signupDetails, setSignupDetails] = useState(null);
  const [image, setImage] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      console.log(result);
    });
  };

  const submitHandler = () => {
    if (password2 !== password) {
      console.log('Passwords do not match');
    } else {
      setSignupDetails({
        email: email,
        username: username,
        password: password,
      });
      navigation.navigate('Login');
    }
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   updateProfile(auth.currentUser, {
    //     displayName: username
    //   })
    //   console.log(auth.currentUser)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  };

  useEffect(() => {
    signupDetails &&
      createUserWithEmailAndPassword(
        auth,
        signupDetails.email,
        signupDetails.password
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: signupDetails.username,
          });
          console.log(auth.currentUser);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [signupDetails]);

  return (
    <SafeAreaView style={styles.registerContainer}>
      <Logo />
      <View style={styles.loginCard}>
        <TextInput
          value={username}
          style={styles.loginInput}
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={email}
          style={styles.loginInput}
          placeholder='E-mail'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.loginInput}
          placeholder='Enter Password'
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          value={password2}
          style={styles.loginInput}
          placeholder='Re-enter Password'
          onChangeText={(text) => setPassword2(text)}
        />

        <Button btnText={'Pick a display photo'} onSubmit={pickImage} />
      </View>
      <Button btnText={'Submit'} onSubmit={submitHandler} />
      <Text style={styles.text}>
        By registering, you confirm that you accept our
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          Terms of Use
        </Text>
        and
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          Privacy Policy
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: 'lightgrey',
  },
  loginCard: {
    alignItems: 'center',
    width: width,
    marginTop: 20,
  },
  loginInput: {
    width: '72.5%',
    marginBottom: 18,
    padding: 9,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#ccc9c9',
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: 'red',
  },
});
