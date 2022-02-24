import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import VerticalList from './Reusable/VerticalList';



const Marketplace = () => {

  const [selectedCategory, setSelectedCategory] = useState();

  const onValueChangeHandler = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };
 
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
        onValueChange={(itemValue) => onValueChangeHandler(itemValue)}
        style={styles.marketplaceCategory}
      >
        <Picker.Item label='All' value='All'>
          All
        </Picker.Item>
        <Picker.Item label='Electronics' value='Electronics'>
          Electronics
        </Picker.Item>
        <Picker.Item label='Clothing' value='Clothing'>
          Clothing
        </Picker.Item>
      </Picker>
  
      <VerticalList class={'all-items'} category={'All'}/>
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
