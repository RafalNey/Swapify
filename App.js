import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { itemImgs } from './images/itemImgs';
import ItemsSlider from './components/ItemsSlider';
import { ScrollView } from 'react-native';
// import Nav from './components/Nav/Nav';
import Logo from './components/Logo';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar />
        {/* <Logo /> */}
        <ItemsSlider data={itemImgs} />
        <ItemsSlider data={itemImgs} />
        <ItemsSlider data={itemImgs} />
        <ItemsSlider data={itemImgs} />
      </ScrollView>
      {/* <Nav /> */}
    </View>
  );
};

export default App;
