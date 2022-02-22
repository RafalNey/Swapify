import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const ConfirmEmailScreen = () => {

    const [secretCode, setSecretCode] = useState('');

    const onConfirmPressed = () => {
        console.warn("Confirm");    }

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onResendPressed = () => {
        console.warn("Resend the code");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.root}>

            <Text style={styles.title}>Confirm your e-mail</Text>            
            
            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={secretCode} 
                setValue={setSecretCode} />

            <CustomButton 
                text="Confirm"
                onPress={onConfirmPressed} />

            <CustomButton 
                text="Resend the code"
                onPress={onResendPressed}
                type='SECONDARY'/>

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

export default ConfirmEmailScreen;