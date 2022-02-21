import * as React from "react";
import { StyleSheet, StatusBar, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stacks/StackNavigator";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar />
        <Nav />
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
