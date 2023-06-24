import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export const CommentsScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  console.log(params);

  return (
    <View>
      <Image style={styles.img} source={{ uri: params.uri }}></Image>
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
    marginTop: 32,
    width: "100%",
    height: 234,
    resizeMode: "stretch",
  },
});
