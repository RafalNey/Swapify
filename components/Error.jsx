import { StyleSheet, Text, View } from 'react-native';

export const formatErrorMsg = (errMsg) => {
  return `Error: ${errMsg
    .replace(/-/g, ' ')
    .slice(errMsg.lastIndexOf('/') + 1, -2)}`;
};

export const ErrorMsg = ({ errorMsg }) => {
  return (
    <View style={styles.errorMsgContainer}>
      <Text style={styles.errorMsg}>{errorMsg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMsgContainer: {
    position: 'absolute',
    bottom: '-10%',
  },
  errorMsg: {
    fontSize: 15,
    color: 'red',
  },
});
