// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import getMostRecentItems from '../../utils/getMostRecentItems';
import {
  StatusBar,
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.5;
const imageH = imageW * 1.1;

const ItemsSlider = () => {

  const [ recentItems, setRecentItems ] = useState([]); 
  useEffect(() => {
    getMostRecentItems().then((itemsFromDb) => {
      setRecentItems(itemsFromDb);
    })
}, []);

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listHeader}>Recently added</Text>
      <FlatList
        data={recentItems}
        pagingEnabled
        horizontal
        decelerationRate={0}
        snapToInterval={imageW + 20}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemCard}>
              <Image source={{uri: item.img}} style={styles.itemImg} />
              <View style={styles.itemDescriptionContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemTitle}>{item.username}</Text>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};
export default ItemsSlider;

const styles = StyleSheet.create({
  listContainer: {
    height: imageH,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  listHeader: {
    marginBottom: 20,
    fontSize: 15,
  },
  itemCard: {
    position: 'relative',
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  itemImg: {
    width: imageW,
    height: imageH,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  itemDescriptionContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: imageW,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, .3)',
  },
  itemTitle: {
    color: '#fff',
  },
});
