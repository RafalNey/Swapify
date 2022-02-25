import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Formik } from 'formik'
import { useState } from 'react';
import deleteItem from '../../utils/deleteItem';
import { useEffect } from 'react';

const DeleteItem = () => {
    const [id, setId] = useState('')
    useEffect(() => {
        //
    })
    return (
        <View>
            <Text>ID of item to delete</Text>
            <TextInput
              value={}></TextInput>
        </View>
    )

}