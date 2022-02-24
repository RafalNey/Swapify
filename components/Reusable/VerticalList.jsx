import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {  
    onSnapshot
  } from 'firebase/firestore';
import collectionRef from '../../firebase';
import { fashion } from '../../utils/getItems';
import  getItems from '../../utils/getItems';
//import items from '..//utils/getItems';
import { itemImgs } from '../../images/itemImgs';

const { width } = Dimensions.get('screen');
const imageW = width * 0.44;
const imageH = imageW * 1.1;

const VerticalList = ({category}) => {
  
  const [ items, setItems ] = useState([]); 
  console.log(category)
  useEffect(() => {
    console.log(category.category)
    getItems(category).then((itemsFromDb) =>{
      console.log(itemsFromDb)
      setItems(itemsFromDb);
    })
}, []);
  // 
  // {console.log(items, '<<< items')}
  return (
   
    <FlatList
      data={items}
      pagingEnabled
      style={{ alignSelf: 'stretch' }}
      decelerationRate={0}
      snapToInterval={imageH + 20}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        {console.log(item)}
        return (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.img }} style={styles.itemImg} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemHeader}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.posted_at}</Text>
              <Text>{item.username}</Text>
              <View style={styles.itemFooter}>
                <Text>{}</Text>
                <TouchableOpacity>
                  <Fontisto name='trash' size={24} color='#6b6565' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc9c9',
    overflow: 'hidden',
  },
  itemImg: {
    width: imageW,
    height: imageH,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '3%',
  },
  itemHeader: {
    textAlign: 'center',
    fontSize: 17,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
