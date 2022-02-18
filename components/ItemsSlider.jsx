import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.5;
const imageH = imageW * 1.1;

const ItemsSlider = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      <StatusBar hidden />
      <Text style={styles.listHeader}>Recently added</Text>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemCard}>
              <Image source={{ uri: item }} style={styles.itemImg} />
              <View style={styles.itemDescriptionContainer}>
                <Text style={styles.itemTitle}>Image</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default ItemsSlider;

const styles = StyleSheet.create({
  listContainer: {
    height: imageH,
    marginLeft: 20,
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
