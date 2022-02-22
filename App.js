import * as React from "react";
import { StyleSheet, StatusBar, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stacks/StackNavigator";
import Nav from "./components/Nav/Nav";
import { UserContext } from "./contexts/UserContext"
import { useState } from "react";



const App = () => {

const [loggedInUser, setLoggedInUser] = useState({});
const isLoggedIn = Object.keys(loggedInUser).length > 0;

  return (
    <UserContext.Provider value = {{loggedInUser, setLoggedInUser, isLoggedIn}}>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
