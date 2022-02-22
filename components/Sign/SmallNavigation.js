
// NOT WORKING STILL !!!!!

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// NOT WORKING STILL !!!!!

import SignInScreen from './SignInScreen';
import RegisterScreen from './RegisterScreen';
import ConfirmEmailScreen from './ConfirmEmailScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import NewPasswordScreen from './NewPasswordScreen';
import Home from '../Home/Home';

// NOT WORKING STILL !!!!!

const Stack = createNativeStackNavigator();

// <Stack.Navigator screenOptions={{headerShown: false}} >

// NOT WORKING STILL !!!!!

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// export default Navigation;