import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Logo from '../../images/Logo.png';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.35;
const imageH = imageW * 0.35;

const SignInScreen = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("SignIn");
    }

    const onForgotPasswordPressed = () => {
        console.warn("ForgotPassword");
    }

    const onRegisterPressed = () => {
        console.warn("Register");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.logoContainer}>
            <Image 
                source={ Logo } 
                style={ StyleSheet.logo }/>
        </View>

        <View style={styles.root}>
            <CustomInput 
                placeholder="Username" 
                value={userName} 
                setValue={setUserName} />
            
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true} />

            <CustomButton 
                text="Sign in"
                onPress={onSignInPressed} />

            <CustomButton 
                text="Forgot password"
                onPress={onForgotPasswordPressed}
                type="TERTIARY" />

            <CustomButton 
                text="Don't have an account? Register"
                onPress={onRegisterPressed}
                type="TERTIARY" />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 20,
    },
    
    logoContainer: {
      justifyContent: 'center',
      height: imageH,
      alignItems: 'center',
      marginVertical: 20,
      
    },
    logo: {
      width: imageW,
      height: imageH,
      resizeMode: 'contain',
    },
  });  

export default SignInScreen;