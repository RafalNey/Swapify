import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import VerticalList from './Reusable/VerticalList';

const Marketplace = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <SafeAreaView style={styles.marketplaceContainer}>
      <View style={styles.marketplaceHeaderCard}>
        <Fontisto name='shopping-store' size={24} color='#6b6565' />
        <Text style={styles.marketplaceHeader}>
          {!selectedCategory ? 'Marketplace' : selectedCategory}
        </Text>
      </View>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.marketplaceCategory}
      >

        <Picker.Item label='All' value='All'>
          All
        </Picker.Item>
        <Picker.Item label='Antiques and Collectables' value='Antiques and Collectables'>
        Antiques and Collectables
        </Picker.Item>
        <Picker.Item label='Books, Films and Comics' value='Books, Films and Comics'>
        Books, Films and Comics
        </Picker.Item>
        <Picker.Item label='Business and Office' value='Business and Office'>
          Business and Office
        </Picker.Item>
        <Picker.Item label='Electronics' value='Electronics'>
          Electronics
        </Picker.Item>
        <Picker.Item label='Fashion' value='Fashion'>
          Fashion
        </Picker.Item>
        <Picker.Item label='Home and Garden' value='Home and Garden'>
          Home and Garden
        </Picker.Item>
        <Picker.Item label='Jewellery and Watches' value='Jewellery and Watches'>
          Jewellery and Watches
        </Picker.Item>
        <Picker.Item label='Motors' value='Motors'>
          Motors
        </Picker.Item>
        <Picker.Item label='Musical Instruments' value='Musical Instruments'>
        Musical Instruments
        </Picker.Item>
        <Picker.Item label='Pets' value='Pets'>
          Pets
        </Picker.Item>
        <Picker.Item label='Sporting Goods' value='Sporting Goods'>
        Sporting Goods
        </Picker.Item>
        <Picker.Item label='Toys and Games' value='Toys and Games'>
        Toys and Games
        </Picker.Item>
      </Picker>
      <VerticalList category={selectedCategory}/>
    </SafeAreaView>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  marketplaceContainer: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingTop: '5%',
    backgroundColor: '#fff',
  },
  marketplaceHeaderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  marketplaceHeader: {
    marginLeft: 10,
    fontSize: 25,
  },
  marketplaceCategory: {
    alignSelf: 'flex-end',
    width: '50%',
  },
});
