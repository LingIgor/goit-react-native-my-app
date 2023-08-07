import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export const PostsScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (params) {
      setCollection((prev) => [params, ...prev]);
    }
  }, [params]);

  const oneImage = ({ item }) => {
    console.log(item);
    return (
      <View>
        <Image style={styles.img} source={{ uri: item.image }}></Image>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.iconBar}>
          <TouchableOpacity
            style={styles.iconLoc}
            onPress={() => navigation.navigate("Comments", { uri: item.image })}
          >
            <Feather name="message-circle" size={24} color={"#bdbdbd"} />
            <Text>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconLoc}
            onPress={() =>
              navigation.navigate("Map", {
                latitude: item.location.coords.latitude,
                longitude: item.location.coords.longitude,
              })
            }
          >
            <Feather name="map-pin" size={24} color="#bdbdbd" />
            <Text style={styles.nameLocationText}>{item.nameLocation}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.addFoto}>
        <FlatList data={collection} renderItem={oneImage} />
      </View>

      {/* <Text onPress={console.log(collection)}>clock</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  addFoto: {
    marginTop: 32,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: 234,
    resizeMode: "stretch",
  },
  iconBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconLoc: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    fontSize: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
  },
});
