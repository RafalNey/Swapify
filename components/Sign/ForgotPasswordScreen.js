import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const ForgotPasswordScreen = () => {

    const [userName, setUserName] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign in");    }

    const onSendPressed = () => {
        console.warn("NewPassword");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.root}>

            <Text style={styles.title}>Reset your password</Text>            
            
            <CustomInput 
                placeholder="Username" 
                value={userName} 
                setValue={setUserName} />

            <CustomButton 
                text="Send"
                onPress={onSendPressed} />

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

export default ForgotPasswordScreen;