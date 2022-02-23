import { SafeAreaView, StyleSheet, Text } from 'react-native';

const AddItem = () => {
  return (
    <SafeAreaView style={styles.addItemContainer}>
      <Text>AddItem</Text>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  addItemContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
