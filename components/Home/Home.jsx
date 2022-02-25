import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Logo from './Logo';
import ItemsSlider from './ItemsSlider';
import AddItem from '../User/AddItem';

// need some kind of isLoading state as items not 

// Import the functions you need from the SDKs you need

// import { getAuth } from "firebase/auth";

const Home = () => {  

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView>
        <StatusBar default />
        <Logo />
        <ItemsSlider category={'All'} />
        <AddItem />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
