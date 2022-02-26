import React, {useState, useEffect} from 'react';
import { TouchableOpacity,Text, TextInput, View, ScrollView, StyleSheet} from 'react-native';
import {auth, database} from '../firebase';
import {collection, addDoc, query, serverTimestamp, orderBy} from 'firebase/firestore'
import {Formik} from 'formik'
import { getAuth } from 'firebase/auth';
import Button from './Reusable/Button'

const colRef = collection(database, 'messages');

const Messages = () => {
    const auth= getAuth();
    const user = auth.currentUser;
    
    // const document = {
    //     _id:2134,
    //     itemId: 123,
    //     ownerid:1234,
    //     interestedPartyId:2345,
    //     createdAt:'2022-02-24',
    //     messages: [
    //         {createdAt: '2022-02-24', senderId: 2345, message:"Hi there can I swap something for your banjo"},
    //         {createdAt: '2022-02-24', senderId: 1234, message:"Sure, what do you have?"},
    //     ]}
    
    return (
        <ScrollView>
        <View style={{padding: 10}}>
            <Formik
            initialValues={{message: '',
            username: user.displayName,
            user_id: user.uid
        }}
            onSubmit={(values, actions)=>{
                actions.resetForm();
                addDoc(colRef, {username: values.username,
                message: values.message,
            user_id: values.user_id,
            createdAt: serverTimestamp()}
            )
            }}>
                {props => (<View><TextInput
            style={{height: 40}}
            placeholder="New message"
            onChangeText={props.handleChange('message')}
            value={props.values.message}/>
            <Button btnText={'Submit'} onSubmit={props.handleSubmit}/></View>)}
            
            </Formik></View></ScrollView>
    )
}

export default Messages;