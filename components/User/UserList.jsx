import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../Reusable/Button';
import VerticalList from '../Reusable/VerticalList';
import { MarketplaceContext } from '../../contexts/MarketplaceContext';

const UserList = () => {
  const navigation = useNavigation();
  const { marketplace } = useContext(MarketplaceContext);
  const navigationHandler = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.userListContainer}>
      <Text style={styles.userListHeader}>My List</Text>
      <Button btnText={'Add Item'} navigationHandler={navigationHandler} />
      <VerticalList data={marketplace} />
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
