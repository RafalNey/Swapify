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
import { itemImgs } from '../../images/itemImgs';
import Button from '../Button';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.4;
const imageH = imageW * 1.1;

const UserList = () => {
  return (
    <View style={styles.userListContainer}>
      <Text style={styles.userListHeader}>My List</Text>
      <Button btnText={'Add Item'} />
      <FlatList
        data={itemImgs}
        pagingEnabled
        decelerationRate={0}
        snapToInterval={imageH + 20}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemCard}>
              <Image source={{ uri: item }} style={styles.itemImg} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemHeader}>Item Title</Text>
                <Text style={styles.itemMain}>Description</Text>
                <View style={styles.itemFooter}>
                  <Text>Posted on</Text>
                  <TouchableOpacity>
                    <Fontisto name='trash' size={24} color='#6b6565' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    paddingTop: '5%',
    paddingHorizontal: '3%',
    backgroundColor: '#fff',
  },
  userListHeader: {
    marginBottom: '20%',
    fontSize: 25,
  },
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
  },
  itemDetails: {
    flex: 1,
    padding: '2%',
  },
  itemHeader: {
    alignSelf: 'center',
    marginBottom: 15,
    fontSize: 17,
  },
  itemMain: {},
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  itemDate: {},
  itemDelBtn: {},
});
