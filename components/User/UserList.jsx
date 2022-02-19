import { View, Text, Alert } from 'react-native';
import React from 'react';

const UserList = ({ route }) => {
  const { state } = route.params;

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text>UserList</Text>
    </View>
  );
};

export default UserList;
