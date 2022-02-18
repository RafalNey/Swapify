import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Menu from './Menu';

const Nav = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const menuOpenHandler = () => {
    setTimeout(() => {
      setIsPressed((currPress) => !currPress);
    }, 50);
  };

  const navigationHandler = (componentName) => {
    navigation.navigate(componentName);
    setIsPressed(false);
  };

  return (
    <>
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <Ionicons
            name='home'
            size={27}
            color='#6b6565'
            onPress={() => navigationHandler('Home')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItems}>Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={menuOpenHandler}>
          <Ionicons
            name='ios-menu-sharp'
            size={30}
            color={isPressed ? '#d73737' : '#6b6565'}
          />
        </TouchableOpacity>
      </View>
      <Menu navigationHandler={navigationHandler} isPressed={isPressed} />
    </>
  );
};
export default Nav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    borderTopWidth: 1,
    borderTopColor: '#ccc9c9',
  },
  navItems: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
