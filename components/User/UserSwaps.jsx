import { View, Text, StyleSheet } from 'react-native';
import VerticalList from '../Reusable/VerticalList';
import { itemImgs } from '../../images/itemImgs';

const UserSwaps = () => {
  return (
    <View style={styles.userListContainer}>
      <Text style={styles.userListHeader}>Swaps</Text>
      <VerticalList data={itemImgs} />
    </View>
  );
};

export default UserSwaps;

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    paddingTop: '5%',
    paddingHorizontal: '3%',
    backgroundColor: '#fff',
  },
  userListHeader: {
    marginBottom: '20%',
    fontSize: 25,
  },
});
