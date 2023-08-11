import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { getAuth } from "firebase/auth";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import BgImage from "../../images/PhotoBG2.jpg";
import { selectUserPosts } from "../../redux/posts/postSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/posts/postOperations";
import { Feather } from "@expo/vector-icons";
import { logOut } from "../../redux/auth/authOperations";
import app from "../../../firebase/config";
import { oneImage } from "../PostsScreen/PostsScreen";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userPosts = useSelector(selectUserPosts);

  const auth = getAuth(app);
  const user = auth.currentUser;

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllPosts()).unwrap();
    }, [dispatch])
  );

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const oneImage = ({ item }) => {
    return (
      <View>
        <Image style={styles.img} source={{ uri: item.photo }}></Image>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text>{item.displayName}</Text>
        <View style={styles.iconBar}>
          <TouchableOpacity
            style={styles.iconLoc}
            onPress={() =>
              navigation.navigate("Comments", { uri: item.photo, id: item.id })
            }
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
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.wrap}>
          <View style={styles.userPicture}></View>
          <TouchableOpacity onPress={handleLogOut} style={styles.logOutBtn}>
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              backgroundColor="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.title}>{user.displayName ?? "underfined"}</Text>
          <FlatList
            data={userPosts}
            keyExtractor={(_, index) => index.toString()}
            renderItem={oneImage}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  wrap: {
    position: "relative",
    width: "100%",
    height: 400,
    paddingTop: 70,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPicture: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  logOutBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35.16,
    textAlign: "center",
    color: "#212121",
  },
  itemWrap: {
    marginTop: 10,
    marginBottom: 34,
  },
  photo: {
    width: 288,
    height: 180,
    marginBottom: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
  infoWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  locationWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "flex-end",
  },
  nameText: {
    marginBottom: 11,
  },
  commentsText: {
    color: "#212121",
  },
  nameLocationText: {
    color: "#212121",
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
