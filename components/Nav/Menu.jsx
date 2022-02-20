import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
const menuH = height / 1.233;

const Menu = ({ navigationHandler, isPressed }) => {
  const menuItems = ['User', 'Messages', 'My List', 'Swaps', 'Legal'];

  const list = () => {
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

  return (
    <View
      style={{
        ...styles.menu,
        height: menuH,
        display: isPressed ? 'flex' : 'none',
      }}
    >
      {list()}
      <TouchableOpacity style={styles.menuItem} key={'Logout'}>
        <Text style={styles.menuItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  menu: {
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
    fontSize: 15,
  },
});
