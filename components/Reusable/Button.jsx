import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ btnText, navigationHandler, onSubmit }) => {
  const eventsHandler = () => {
    onSubmit && onSubmit();
    navigationHandler && navigationHandler(btnText);
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={eventsHandler}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: '3%',
    backgroundColor: '#3871f3',
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnText: {
    fontSize: 16,
    paddingVertical: 7,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});
