import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Logo from './Logo';
import ItemsSlider from './ItemsSlider';
import { itemImgs } from '../../images/itemImgs';
import Items from './Items';

// need some kind of isLoading state as items not 

// Import the functions you need from the SDKs you need

// import { getAuth } from "firebase/auth";

const Home = () => {  
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView>
        <StatusBar default />
        <Logo />
        <Items />
        <ItemsSlider items={itemImgs} />
        <ItemsSlider items={itemImgs} />
        <ItemsSlider items={itemImgs} />
        <ItemsSlider items={itemImgs} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
