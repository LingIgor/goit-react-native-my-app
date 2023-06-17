import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";

export const PostsScreen = ({ route }) => {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.addFoto}>
        <Image style={styles.img} source={{ uri: params.item }}></Image>
      </View>
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
