import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Logo from './Logo';
import ItemsSlider from './ItemsSlider';
import { itemImgs } from '../../images/itemImgs';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView>
        <StatusBar default />
        <Logo />
        <ItemsSlider data={itemImgs} />
        <ItemsSlider data={itemImgs} />
        <ItemsSlider data={itemImgs} />
        <ItemsSlider data={itemImgs} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
