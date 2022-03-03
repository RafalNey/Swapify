import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import getItems from '../../utils/getItems';
import { descriptionFormatter } from '../../utils/descriptionFormatter';
import { useNavigation } from '@react-navigation/native';
import AverageStarRating from '../AverageStarRating';
import formattedTimestamp from '../../utils/formatTimestamp';

const { width } = Dimensions.get('screen');
const imageW = width * 0.46;
const imageH = imageW * 1.13;

const VerticalList = ({ props }) => {
  const navigation = useNavigation();
  const category = props.category;
  const sortBy = props.sortBy;
  const user = props.user;
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(category, sortBy, user).then((itemsFromDb) => {
      setItems(itemsFromDb);
    });
  }, [category, sortBy, user, items]);

  return (
    <FlatList
      data={items}
      pagingEnabled
      style={{ alignSelf: 'stretch' }}
      decelerationRate={0}
      snapToInterval={imageH + 21.5}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Item', { ...item })}
          >
            <View style={styles.itemCard}>
              <Image source={{ uri: item.img }} style={styles.itemImg} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemUsername}>{item.username}</Text>
                <Text style={styles.itemHeader}>{item.title}</Text>
                <Text style={styles.itemDescription}>
                  {descriptionFormatter(item.description)}
                </Text>
                <AverageStarRating user={item.username} />
                <Text style={styles.postedAt}>
                  {formattedTimestamp(item.posted_at)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
    borderRadius: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 2,
  },
  itemImg: {
    width: imageW,
    height: imageH,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  itemUsername: {
    textAlign: 'right',
  },
  itemHeader: {
    textAlign: 'center',
    fontSize: 17,
  },
  postedAt: {
    textAlign: 'right',
  },
});
