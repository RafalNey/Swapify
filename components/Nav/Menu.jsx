import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

const { width, height } = Dimensions.get('screen');

const Menu = ({ navigationHandler, isPressed }) => {
  const menuItems = ['User', 'Messages', 'My List', 'Swaps', 'Legal'];
  const [isLogged, setIsLogged] = useState(false);
  const { isLoggedIn, loggedInUser, setLoggedInUser } = useContext(UserContext);

  const loginHandler = () => {
    navigationHandler('Login');
  };

  const logoutHandler = () => {
    setLoggedInUser({});
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
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigationHandler('Register')}
        >
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
      {isLoggedIn ? loggedInMenu() : loggedOutMenu()}
      {isLoggedIn && (
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
