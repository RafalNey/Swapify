import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Formik } from 'formik'
import { useState } from 'react';
// import timestampToFirebaseObj from '../../utils/formatTimestamp';

import postItem from '../../utils/postItem';

const AddItem = () => {
  return (
    <Formik
      initialValues={{title: '', img: '', description: '', category: '', username: ''}}
      onSubmit={(values) => { 
        
        values.posted_at = Date.now();
        postItem(values);
     }}
    >
      {({handleChange, handleSubmit, values})=>(
        <View>
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            value={values.title}
            onChangeText={handleChange('title')}
          />
          <Text>Image URL:</Text>
           <TextInput
            style={styles.input}
            value={values.img}
            onChangeText={handleChange('img')}

          />
          <Text>Description:</Text>
           <TextInput
            placeholder={'Tell us about your item...'}
            style={styles.input}
            value={values.description}
            onChangeText={handleChange('description')}
            
          />
          <Text>Username:</Text>
           <TextInput
            style={styles.input}
            value={values.username}
            onChangeText={handleChange('username')}
           
          />
          <Text>Category:</Text>
          <TextInput
            style={styles.input}
            value={values.category}
            onChangeText={handleChange('category')}
    
          />
          <Button onPress={handleSubmit} title="Submit"/>
        </View>
      )}
    </Formik>
  )
};

  //     <SafeAreaView style={styles.addItemContainer}>
  //       <Text>Post your listing below</Text><br></br>
  
  //     </SafeAreaView>
  //     // </View>
  //       )}
  //     </Formik>
  // )


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
