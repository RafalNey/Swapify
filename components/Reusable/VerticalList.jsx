import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { dateFormatter } from '../../utils/dateFormatter';
import { descriptionFormatter } from '../../utils/descriptionFormatter';
import { Fontisto } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.44;
const imageH = imageW * 1.1;

const VerticalList = ({ data }) => {
  console.log(data);
  return (
    <FlatList
      data={data}
      pagingEnabled
      style={{ alignSelf: 'stretch' }}
      decelerationRate={0}
      snapToInterval={imageH + 20}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.img }} style={styles.itemImg} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemHeader}>{item.title}</Text>
              <Text>{descriptionFormatter(item.description)}</Text>
              <View style={styles.itemFooter}>
                <Text>{dateFormatter(item.posted_at.seconds)}</Text>
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
