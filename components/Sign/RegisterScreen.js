import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const RegisterScreen = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn("Register");
    }

    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use");
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy");
    }

    const onSignInPressed = () => {
        console.warn("SignIn");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.root}>

            <Text style={styles.title}>Create an account</Text>            
            
            <CustomInput 
                placeholder="Username" 
                value={userName} 
                setValue={setUserName} />
            
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail} />
            
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true} />

            <CustomInput 
                placeholder="Repeat Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat} 
                secureTextEntry={true} />

            <CustomButton 
                text="Register"
                onPress={onRegisterPressed} />

            <Text style={styles.text}>
                By registering, you confirm that you accept our{' '} 
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
            </Text>
            
            <CustomButton 
                text="Have an account? Sign in"
                onPress={onSignInPressed}
                type="TERTIARY" />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#091C60',
        margin: 10,
    },

    text: {
        color: 'grey',
        marginVertical: 10,
    },

    link: {
        color: '#FDB075'
    },
  });  

export default RegisterScreen;