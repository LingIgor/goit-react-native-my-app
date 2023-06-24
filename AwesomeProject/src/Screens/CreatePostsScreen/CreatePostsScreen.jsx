import {
  StyleSheet,
  View,
  Text,
  Alert,
  Keyboard,
  Button,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [nameLocation, setNameLocation] = useState("");

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

  if (hasPermission === false || null) {
    return <Text>No access to camera</Text>;
  }

  const saveFoto = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.requestPermissionsAsync();

        setImage(uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onPublish = async () => {
    if (!image) return;

    let location = await Location.getCurrentPositionAsync({});

    const post = { image, name, nameLocation, location };
    navigation.navigate("Home", {
      screen: "Posts",
      params: post,
    });
    setImage(null);
    setNameLocation("");
  };

  return (
    <View style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.addFoto}>
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          <TouchableOpacity style={styles.fotoIcon} onPress={saveFoto}>
            <Feather name="camera" size={24} style={styles.icon} />
          </TouchableOpacity>
        </Camera>
      </View>

      <Text>Make foto</Text>
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
      <Button
        style={styles.button}
        title="Опубліковати"
        onPress={onPublish}
      ></Button>
      {/* </TouchableWithoutFeedback> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  camera: {
    flex: 1,
  },
  addFoto: {
    marginTop: 32,
    width: "100%",
    height: 234,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  input: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 16,
    height: 50,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    borderStyle: "solid",
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 16,
    color: "black",
  },

  button: {
    width: 100,
    height: 50,
    backgroundColor: "orange",
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
