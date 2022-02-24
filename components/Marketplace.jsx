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
        <Picker.Item label='Antiques and Collectables' value='antiques_and_collectables'>
        Antiques and Collectables
        </Picker.Item>
        <Picker.Item label='Books, films and comics' value='books_films_comics'>
          Books, films and comics
        </Picker.Item>
        <Picker.Item label='Business and office' value='business_and_office'>
          Business and office
        </Picker.Item>
        <Picker.Item label='Electronics' value='electronics'>
          Electronics
        </Picker.Item>
        <Picker.Item label='Fashion' value='fashion'>
          Fashion
        </Picker.Item>
        <Picker.Item label='Home and Garden' value='home_and_garden'>
          Home and Garden
        </Picker.Item>
        <Picker.Item label='Jewellery and Watches' value='jewellery_and_watches'>
          Jewellery and Watches
        </Picker.Item>
        <Picker.Item label='Motors' value='motors'>
          Motors
        </Picker.Item>
        <Picker.Item label='Musical Instruments' value='musical_instruments'>
        Musical Instruments
        </Picker.Item>
        <Picker.Item label='Pets' value='pets'>
          Pets
        </Picker.Item>
        <Picker.Item label='Sporting Goods' value='sporting_goods'>
        Sporting Goods
        </Picker.Item>
        <Picker.Item label='Toys and Games' value='toys_and_games'>
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
