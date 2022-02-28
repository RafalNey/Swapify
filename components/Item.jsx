import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './Reusable/Button';
import { auth } from '../firebase';
import formattedTimestamp from '../utils/formatTimestamp';
import { useNavigation } from '@react-navigation/native';
import deleteItem from '../utils/deleteItem';

const Item = ({ route }) => {
  const navigation = useNavigation();
  const item = route.params;
  const [id, setId] = useState(item.id);

  const deleteItemHandler = async () => {
    deleteItem(id);
    // navigation.navigate('My List');
  };

  return (
    <SafeAreaView style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: item.img }} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
      <View style={styles.swapContainer}>
        <Text style={styles.itemUsername}>{item.username}</Text>
        <Text>{formattedTimestamp(item.posted_at)}</Text>
      </View>
      {auth.currentUser.displayName === item.username ? (
        <Button btnText={'Delete Item'} onSubmit={deleteItemHandler} />
      ) : (
        <Button btnText={'Offer Swap'} />
      )}
      <Text style={styles.itemDescription}>{item.description}</Text>
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
  },
  itemImage: {
    width: '100%',
    height: '30%',
    borderRadius: 5,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ccc9c9',
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 28,
  },
  itemCategory: {
    marginBottom: 60,
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  swapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemUsername: {
    fontSize: 20,
  },
  itemDescription: {
    marginTop: 20,
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
  },
});
