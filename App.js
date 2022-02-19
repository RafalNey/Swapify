import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacks/StackNavigator';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Nav />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
