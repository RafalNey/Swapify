import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Logo from './Logo';
import ItemsSlider from './ItemsSlider';
import AddItem from '../User/AddItem';
import DeleteItem from '../User/DeleteItem';
import { useState } from 'react';


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
        <DeleteItem />
        <AddItem />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
