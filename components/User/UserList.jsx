import { View, Text, StyleSheet } from 'react-native';
import Button from '../Reusable/Button';
import VerticalList from '../Reusable/VerticalList';
import { itemImgs } from '../../images/itemImgs';

const UserList = () => {
  return (
    <View style={styles.userListContainer}>
      <Text style={styles.userListHeader}>My List</Text>
      <Button btnText={'Add Item'} />
      <VerticalList data={itemImgs} />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '5%',
    paddingHorizontal: '3%',
    backgroundColor: '#fff',
  },
  userListHeader: {
    alignSelf: 'flex-start',
    marginBottom: '20%',
    fontSize: 25,
  },
});
