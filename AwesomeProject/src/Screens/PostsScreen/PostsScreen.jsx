import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

export const PostsScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (params && params.post) {
      setCollection((prev) => [params.post, ...prev]);
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <View style={styles.addFoto}>
        <FlatList
          data={collection}
          // renderItem={({ item }) => (
          //   <Image
          //     source={{ uri: item }}
          //     style={styles.photo}
          renderItem={({ item }) => (
            // <Text style={styles.item} onPress={console.log(item)}>
            //   {item}
            // </Text>
            <Image style={styles.img} source={{ uri: item }}></Image>
          )}
        />
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
    height: 234,
    borderRadius: 8,
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: 234,
    resizeMode: "stretch",
  },
});
