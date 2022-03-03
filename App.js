import { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacks/StackNavigator';
import { UserContext } from './contexts/UserContext';
import Nav from './components/Nav/Nav';
import { LogBox } from 'react-native';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;
  LogBox.ignoreAllLogs();
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar />
          <Nav />
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </UserContext.Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
