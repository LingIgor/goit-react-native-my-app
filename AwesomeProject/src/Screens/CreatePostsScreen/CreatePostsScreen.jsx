import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import auth from "../../firebase/config";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [nameLocation, setNameLocation] = useState("");
  const [uId] = useState(auth);
  console.log(uId);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");

      let locationPermission =
        await Location.requestForegroundPermissionsAsync();
      if (locationPermission.status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  const saveFoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.requestPermissionsAsync();
      setImage(uri);
    }
  };

  const onPublish = async () => {
    if (!image) return;

    let location = await Location.getCurrentPositionAsync({});

    const post = { image, name, nameLocation, location, uId };
    navigation.navigate("Home", {
      screen: "Posts",
      params: post,
    });
    setImage(null);
    setNameLocation("");
    setName("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.addFoto}>
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <TouchableOpacity style={styles.fotoIcon} onPress={saveFoto}>
              <Feather name="camera" size={24} style={styles.icon} />
            </TouchableOpacity>
          </Camera>
        </View>

        <Text style={styles.loadFoto}>Завантажте фото</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Location"
          onChangeText={setNameLocation}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={onPublish}>
          <Text style={styles.textBtn}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  camera: {
    height: 234,
    width: "100%",
    borderRadius: 8,
    marginTop: 32,
  },

  loadFoto: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 32,
  },
  // addFoto: {
  //   marginTop: 32,
  //   width: "100%",
  //   height: 234,
  //   borderRadius: 8,
  //   backgroundColor: "#F6F6F6",
  // },
  input: {
    // marginTop: 32,
    // marginBottom: 16,
    // fontSize: 16,
    height: 50,
    // borderBottomColor: "#E8E8E8",
    // borderBottomWidth: 1,
    // borderRadius: 8,
    // backgroundColor: "white",
    // borderStyle: "solid",
    // paddingLeft: 16,
    // paddingBottom: 15,
    // paddingTop: 16,
    // color: "black",

    marginTop: 10,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
  },

  button: {
    height: 50,
    marginTop: 32,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#ff6c00",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 100,
  },
  textBtn: {
    marginTop: 3,
    color: "#fff",
  },
  fotoIcon: {
    position: "relative",
    marginTop: 87,
    marginLeft: 145,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  icon: {
    color: "grey",
    position: "absolute",
    top: 18,
    right: 18,
  },

  img: {
    width: "100%",
    height: 234,
    resizeMode: "stretch",
  },
});
