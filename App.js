import * as React from 'react';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacks/StackNavigator';
import Nav from './components/Nav/Nav';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignInScreen from './components/Sign/SignInScreen';
import RegisterScreen from './components/Sign/RegisterScreen';
import ConfirmEmailScreen from './components/Sign/ConfirmEmailScreen';
import ForgotPasswordScreen from './components/Sign/ForgotPasswordScreen';
import NewPasswordScreen from './components/Sign/NewPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <RegisterScreen />
    </SafeAreaView>

//    <NavigationContainer>
//      <StatusBar />
//      <Nav />
//      <StackNavigator />
//    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
      flex: 1,
      backgroundColor: '#F9FBFC',
      alignItems: 'center',
      padding: 20,
  },
});

export default App;
