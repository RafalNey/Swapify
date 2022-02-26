import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Formik } from 'formik'
import { useState } from 'react';
// import timestampToFirebaseObj from '../../utils/formatTimestamp';

import postItem from '../../utils/postItem';

const AddItem = () => {

  return (
    <SafeAreaView style={styles.addItemContainer}>
      <Formik
        initialValues={{title: '', img: '', description: '', category: '', username: ''}}
        onSubmit={(values, actions) => { 
          actions.resetForm();
          values.posted_at = Date.now();
          postItem(values);
     }}
    >
      {(props)=>(
        <View>
          <Text>Add your listing below</Text>
          <Text>Title</Text>
          <TextInput
            placeholder='Tell us what you are listing:'
            style={styles.input}
            value={props.values.title}
            onChangeText={props.handleChange('title')}
          />
          <Text>Image URL:</Text>
           <TextInput
            placeholder='Paste in your image URL...'
            style={styles.input}
            value={props.values.img}
            onChangeText={props.handleChange('img')}

          />
          <Text>Description:</Text>
           <TextInput
            placeholder={'Tell us a bit about your item...'}
            style={styles.input}
            value={props.values.description}
            onChangeText={props.handleChange('description')}
            
          />
          <Text>Username:</Text>
           <TextInput
            style={styles.input}
            value={props.values.username}
            onChangeText={props.handleChange('username')}
           
          />
          <Text>Category:</Text>
          <TextInput
            style={styles.input}
            value={props.values.category}
            onChangeText={props.handleChange('category')}
    
          />
          <Button onPress={props.handleSubmit} title='Submit'/>
        </View>
      )}
    </Formik>
    </SafeAreaView>
  )
};

export default AddItem;

const styles = StyleSheet.create({
  addItemContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});
