import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from "react-native";
import deleteItem from "../../utils/deleteItem";
import formattedTimestamp from "../../utils/formatTimestamp";
import Loader from "../Reusable/Loader";
import { UserContext } from "../../contexts/UserContext";
import { auth } from "../../firebase";
import { getMyItemMessageId } from "../../utils/messageQueries";
import Button from "../Reusable/Button";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import locationList from "../../utils/locationList";

const Item = ({ route }) => {
  const navigation = useNavigation();
  const item = route.params;
  const [id, setId] = useState(item.id);
  const [messageDocId, setMessageDocId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  const deletePrompt = () => {
    Alert.alert("Wait!", "Are you sure you want to delete this listing?", [
      {
        text: "Cancel",
      },
      {
        text: "yep, delete",
        onPress: () => {
          setLoading(true);
          deleteItem(id)
            .then(() => {
              Alert.alert("Success", "Listing deleted");
              navigation.navigate("My List");
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
    navigation.navigate("Login");
  };
  useEffect(() => {
    if (
      auth.currentUser?.displayName !== undefined &&
      auth.currentUser?.displayName !== null
    ) {
      getMyItemMessageId(id, auth.currentUser.displayName).then((docId) => {
        setMessageDocId(docId);
      });
    }
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.itemContainer}>
      <ScrollView>
        <View style={styles.itemCard}>
          <Image style={styles.itemImage} source={{ uri: item.img }} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCategory}>{item.category}</Text>
          <View style={styles.swapContainer}>
            <View style={styles.userInfo}>
              <Text style={styles.itemUsername}>User: {item.username}</Text>
              <Text>{formattedTimestamp(item.posted_at)}</Text>
            </View>
          </View>
        </View>

        {locationList[item.location] ? (
          <View style={styles.mapContainer}>
            <Text style={styles.locationText}>Location</Text>
            <MapView
              style={{ height: "50%", marginTop: 10 }}
              region={locationList[item.location]}
            >
              <Marker coordinate={locationList[item.location].marker} />
            </MapView>
          </View>
        ) : null}

        <Text style={styles.itemDescription}>{item.description}</Text>

        {!item.swapped && (
          <View>
            {!isLoggedIn ? (
              <TouchableOpacity onPress={goToLoginHandler}>
                <Text style={styles.register}>
                  Please login or register to offer swap
                </Text>
              </TouchableOpacity>
            ) : auth.currentUser.displayName === item.username ? (
              <Button btnText={"Delete Item"} onSubmit={() => deletePrompt()} />
            ) : (
              <Button
                btnText={"Offer Swap"}
                onSubmit={() =>
                  navigation.navigate("Conversation", {
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
                alignSelf: "center",
                padding: 10,
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              Swap completed
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: "5%",
    backgroundColor: "#D1D1D1",
  },
  itemCard: {
    backgroundColor: "#fff",
    borderRadius: 30,
  },

  userInfo: {
    marginLeft: 60,
  },
  mapContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 3,
    borderRadius: 30,
  },

  locationText: {
    marginLeft: 100,
  },
  itemImage: {
    width: "100%",
    height: "35%",
    borderRadius: 5,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#ccc9c9",
  },
  itemTitle: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 28,
  },
  itemCategory: {
    marginBottom: 45,
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
  swapContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  itemUsername: {
    fontSize: 20,
  },
  itemDescription: {
    marginTop: 20,
    padding: 20,
    fontSize: 16,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#f7f7f7",
  },
  register: {
    marginVertical: 10,
    fontSize: 17,
    textAlign: "center",
    color: "#0000ff",
  },
});
