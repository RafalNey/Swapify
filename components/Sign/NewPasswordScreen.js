import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const NewPasswordScreen = () => {

    const [secretCode, setSecretCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");    }

    const onSubmitPressed = () => {
        console.warn("Submit");    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.root}>

            <Text style={styles.title}>Reset your password</Text>            
            
            <CustomInput 
                placeholder="Type your code here" 
                value={secretCode} 
                setValue={setSecretCode} />

            <CustomInput 
                placeholder="Enter your new password" 
                value={newPassword} 
                setValue={setNewPassword} />

            <CustomInput 
                placeholder="Retype your new password" 
                value={newPasswordRepeat} 
                setValue={setNewPasswordRepeat} />

            <CustomButton 
                text="Submit"
                onPress={onSubmitPressed} />

            <CustomButton 
                text="Back to Sign in"
                onPress={onSignInPressed}
                type='TERTIARY' />
            
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

export default NewPasswordScreen;