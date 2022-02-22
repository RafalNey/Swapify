import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Logo from './Home/Logo';
import Button from './Button';

const { width } = Dimensions.get('screen');

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const submitHandler = () => {};

  return (
    <SafeAreaView style={styles.registerContainer}>
      <Logo />
      <View style={styles.loginCard}>
        <TextInput
          value={fullName}
          style={styles.loginInput}
          placeholder='Enter Full Name'
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          value={username}
          style={styles.loginInput}
          placeholder='Enter Username'
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={email}
          style={styles.loginInput}
          placeholder='Enter Email'
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
      </View>
      <Button btnText={'Submit'} onPress={submitHandler} />
      {/* Full Name
      Username
      Password
      Re-type password
      email */}
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
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
});
