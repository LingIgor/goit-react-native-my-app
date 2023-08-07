import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";

export const CommentsScreen = ({ route }) => {
  const { params } = useRoute();
  console.log(route);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: params.uri }}></Image>
        <TextInput placeholder="Коментувати..." style={styles.input} />

        <TouchableOpacity style={styles.inputBtn}>
          <AntDesign name="arrowup" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  addFoto: {
    // marginTop: 32,
    width: "100%",
    height: 234,
    borderRadius: 8,
    backgroundColor: "white",
  },
  img: {
    marginTop: 32,
    width: "100%",
    height: 234,
    resizeMode: "stretch",
  },
  inputBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 23,
    right: 30,
    width: 34,
    height: 34,
    backgroundColor: "#ff6c00",
    borderRadius: 50,
  },

  input: {
    position: "absolute",
    bottom: 0,
    height: 50,
    marginTop: 10,
    marginBottom: 16,
    padding: 15,
    borderWidth: 1,
    // borderBottomColor: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
    borderRadius: 25,
    width: 343,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
