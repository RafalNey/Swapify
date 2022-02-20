import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ btnText, navigationHandler }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigationHandler && navigationHandler(btnText)}
    >
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: '3%',
    backgroundColor: '#353637',
    elevation: 1,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
  },
});
