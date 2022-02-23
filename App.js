import { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacks/StackNavigator';
import { UserContext } from './contexts/UserContext';
import { MarketplaceContext } from './contexts/MarketplaceContext';
import { onSnapshot } from 'firebase/firestore';
import { itemsRef } from './firebase';
import Nav from './components/Nav/Nav';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;
  const [marketplace, setMarketplace] = useState(null);

  useEffect(() => {
    let items = [];
    onSnapshot(itemsRef, (itemsSnap) => {
      itemsSnap.docs.forEach((item) => {
        items.push({ ...item.data(), id: item.id });
      });
      setMarketplace(items);
    });
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <MarketplaceContext.Provider value={{ marketplace, setMarketplace }}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <StatusBar />
            <Nav />
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </MarketplaceContext.Provider>
    </UserContext.Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
