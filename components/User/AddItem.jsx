import { Picker } from '@react-native-picker/picker';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import postItem from '../../utils/postItem';
import getCategories from '../../utils/getCategories';
import { serverTimestamp } from 'firebase/firestore';
import { auth } from '../../firebase';

const AddItem = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromDb) => {
      setCategories(categoriesFromDb);
    });
  }, []);

  return (
    <SafeAreaView style={styles.addItemContainer}>
      <Formik
        initialValues={{ title: '', img: '', description: '', category: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          values.posted_at = serverTimestamp();
          values.username = auth.currentUser.displayName;
          postItem(values);
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <Text style={styles.formHeader}>Add your listing below</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
              placeholder='Tell us what you are listing...'
              style={styles.input}
              value={props.values.title}
              onChangeText={props.handleChange('title')}
            />
            <Text style={styles.label}>Image URL:</Text>
            <TextInput
              placeholder='Paste in your image URL...'
              style={styles.input}
              value={props.values.img}
              onChangeText={props.handleChange('img')}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
              placeholder={'Tell us a bit about your item...'}
              style={styles.input}
              value={props.values.description}
              onChangeText={props.handleChange('description')}
            />
            <Text style={styles.label}>Please select a category:</Text>
            <Picker
              enabled={true}
              placeholder='Select your category'
              selectedValue={props.values.category}
              onValueChange={props.handleChange('category')}
            >
              {categories.map((category) => {
                return (
                  <Picker.Item
                    label={category}
                    value={category}
                    key={category}
                  />
                );
              })}
            </Picker>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={props.handleSubmit}
            >
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  addItemContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: '5%',
  },
  formHeader: {
    marginBottom: 50,
    fontSize: 25,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    marginBottom: 18,
    padding: 9,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ccc9c9',
  },
  submitBtn: {
    paddingVertical: 10,
    backgroundColor: '#3871f3',
    elevation: 2,
    borderRadius: 5,
  },
  submitBtnText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
