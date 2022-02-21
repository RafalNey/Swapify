import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';

const { width, height } = Dimensions.get('screen');

const Menu = ({ navigationHandler, isPressed }) => {
  const menuItems = ['User', 'Messages', 'My List', 'Swaps', 'Legal'];
  const [isLogged, setIsLogged] = useState(false);

  const loginHandler = () => {
    // setIsLogged(true);
    navigationHandler('Login');
  };

  const logoutHandler = () => {
    setIsLogged(false);
    navigationHandler('Home');
  };

  const loggedInMenu = () => {
    return menuItems.map((menuItem) => {
      return (
        <TouchableOpacity
          style={styles.menuItem}
          key={menuItem}
          onPress={() => navigationHandler(menuItem)}
        >
          <Text style={styles.menuItemText}>{menuItem}</Text>
          <SimpleLineIcons name='arrow-right' size={24} color='#6b6565' />
        </TouchableOpacity>
      );
    });
  };

  const loggedOutMenu = () => {
    return (
      <>
        <TouchableOpacity style={styles.menuItem} onPress={loginHandler}>
          <Text style={styles.menuItemText}>Login</Text>
          <SimpleLineIcons name='arrow-right' size={24} color='#6b6565' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Register</Text>
          <SimpleLineIcons name='arrow-right' size={24} color='#6b6565' />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView
      style={{
        ...styles.menu,
        display: isPressed ? 'flex' : 'none',
      }}
    >
      {isLogged ? loggedInMenu() : loggedOutMenu()}
      {isLogged && (
        <TouchableOpacity
          style={styles.menuItem}
          key={'Logout'}
          onPress={logoutHandler}
        >
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
export default Menu;

const styles = StyleSheet.create({
  menu: {
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuItemText: {
    fontSize: 17,
  },
});
