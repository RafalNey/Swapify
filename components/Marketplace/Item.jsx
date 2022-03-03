import { useNavigation } from '@react-navigation/native';
import { useContext, useState, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import deleteItem from '../../utils/deleteItem';
import formattedTimestamp from '../../utils/formatTimestamp';
import Loader from '../Reusable/Loader';
import { UserContext } from '../../contexts/UserContext';
import { auth } from '../../firebase';
import { getMyItemMessageId } from '../../utils/messageQueries';
import Button from '../Reusable/Button';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import locationList from '../../utils/locationList';

const Item = ({ route }) => {
  const navigation = useNavigation();
  const item = route.params;
  const [id, setId] = useState(item.id);
  const [messageDocId, setMessageDocId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  const deletePrompt = () => {
    Alert.alert('Wait!', 'Are you sure you want to delete this listing?', [
      {
        text: 'Cancel',
      },
      {
        text: 'yep, delete',
        onPress: () => {
          setLoading(true);
          deleteItem(id)
            .then(() => {
              Alert.alert('Success', 'Listing deleted');
              navigation.navigate('My List');
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
        },
      },
    ]);
  };

  const goToLoginHandler = () => {
    navigation.navigate('Login');
  };
  useEffect(() => {
    if (auth.currentUser === null) {
      auth.currentUser = 'guest';
    }
    getMyItemMessageId(id, auth.currentUser.displayName)
      .then((docId) => {
        setMessageDocId(docId);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <SafeAreaView style={styles.itemContainer}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.itemCard}>
          <Image style={styles.itemImage} source={{ uri: item.img }} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCategory}>{item.category}</Text>
          <View style={styles.userInfo}>
            <Text style={styles.itemUsername}>{item.username}</Text>
            <Text>{formattedTimestamp(item.posted_at)}</Text>
          </View>
          {!item.swapped && (
            <View>
              {!isLoggedIn ? (
                <TouchableOpacity onPress={goToLoginHandler}>
                  <Text style={styles.register}>
                    Please login or register to offer swap
                  </Text>
                </TouchableOpacity>
              ) : auth.currentUser.displayName === item.username ? (
                <Button
                  btnText={'Delete Item'}
                  onSubmit={() => deletePrompt()}
                />
              ) : (
                <Button
                  btnText={'Offer Swap'}
                  onSubmit={() =>
                    navigation.navigate('Conversation', {
                      messageDocId: messageDocId,
                      item: item,
                    })
                  }
                />
              )}
            </View>
          )}
          {!!item.swapped && (
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  padding: 10,
                  fontSize: 20,
                  fontWeight: '700',
                }}
              >
                Swap completed
              </Text>
            </View>
          )}
          <Text style={styles.itemDescription}>{item.description}</Text>
          {locationList[item.location] ? (
            <View>
              <MapView style={styles.map} region={locationList[item.location]}>
                <Marker coordinate={locationList[item.location].marker} />
              </MapView>
            </View>
          ) : null}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#f4f3f3',
  },
  itemCard: {
    paddingVertical: '3.8%',
    paddingHorizontal: '3%',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  map: {
    height: '50%',
    marginTop: 20,
  },
  itemImage: {
    width: '100%',
    height: '30%',
    borderRadius: 5,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ccc9c9',
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 28,
  },
  itemCategory: {
    marginBottom: 35,
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  itemUsername: {
    fontSize: 18,
  },
  itemDescription: {
    marginTop: 10,
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
  },
  register: {
    marginVertical: 5,
    fontSize: 15,
    textAlign: 'center',
    color: '#0000ff',
  },
});
