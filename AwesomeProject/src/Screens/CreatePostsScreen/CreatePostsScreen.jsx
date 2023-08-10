import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { addPost } from "../../redux/posts/postOperations";
import { getAuth } from "firebase/auth";
import app from "../../../firebase/config";
import { useDispatch } from "react-redux";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [nameLocation, setNameLocation] = useState("");

  const dispatch = useDispatch();

  const pablishBtnIsActive = photo
    ? styles.publishBtnIsActive
    : styles.publishBtn;
  const textPublishBtnIsActive = photo
    ? styles.textPublishBtnIsActive
    : styles.textPublishBtn;

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

  // const takePhoto = async () => {
  //   if (cameraRef) {
  //     const { uri } = await cameraRef.takePictureAsync();
  //     await MediaLibrary.createAssetAsync(uri);
  //     setPhoto(uri);
  //   }
  // };

  const onPublish = async () => {
    if (!photo) return;

    try {
      let location = await Location.getCurrentPositionAsync({});
      const { uid, displayName } = getAuth().currentUser;
      const post = { uid, photo, location, name, nameLocation, displayName };
      await dispatch(addPost(post)).unwrap();
      navigation.navigate("Posts", { post });
      setName("");
      setNameLocation("");
      setPhoto(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   return (
  //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //       <View style={styles.container}>
  //         <Camera type={type} ref={setCameraRef} style={styles.camera}>
  //           <View style={styles.photoView}>
  //             <TouchableOpacity style={styles.flipContainer} onPress={flipCamera}>
  //               <MaterialIcons
  //                 name="flip-camera-android"
  //                 size={24}
  //                 color="#fff"
  //               />
  //             </TouchableOpacity>
  //             <TouchableOpacity style={styles.takePhotoWrap} onPress={takePhoto}>
  //               <FontAwesome name="camera" size={24} color="#bdbdbd" />
  //             </TouchableOpacity>
  //           </View>
  //         </Camera>

  //         <Text style={styles.photoLoad}>Завантажте фото</Text>
  //         <KeyboardAvoidingView
  //           behavior={Platform.OS === "ios" ? "padding" : "height"}
  //         >
  //           <TextInput
  //             value={name}
  //             onChangeText={setName}
  //             style={styles.nameInput}
  //             placeholder="Назва..."
  //             placeholderTextColor="#bdbdbd"
  //           />

  //           <View style={styles.locationInputWrap}>
  //             <TextInput
  //               value={nameLocation}
  //               onChangeText={setNameLocation}
  //               style={styles.locationInput}
  //               placeholder="Місцевість..."
  //               placeholderTextColor="#bdbdbd"
  //             />
  //             <Feather
  //               name="map-pin"
  //               size={24}
  //               color="#bdbdbd"
  //               style={styles.locationIcon}
  //             />
  //           </View>
  //         </KeyboardAvoidingView>
  //         <TouchableOpacity
  //           style={[styles.publishBtn, pablishBtnIsActive]}
  //           onPress={onPublish}
  //         >
  //           <Text style={[styles.textPublishBtn, textPublishBtnIsActive]}>
  //             Опублікувати
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     width: "100%",
  //     height: "100%",
  //     flex: 1,
  //     paddingHorizontal: 25,
  //     paddingTop: 10,
  //     backgroundColor: "#fff",
  //   },
  //   camera: {
  //     borderRadius: 8,
  //     height: 180,
  //     width: 288,
  //     marginBottom: 5,
  //     alignSelf: "center",
  //   },
  //   photoView: {
  //     position: "relative",
  //     flex: 1,
  //     width: 288,
  //     height: 180,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "transparent",
  //   },
  //   takePhotoWrap: {
  //     width: 60,
  //     height: 60,
  //     borderRadius: 50,
  //     backgroundColor: "rgba(255, 255, 255, 0.3)",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   photoLoad: {
  //     color: "#bdbdbd",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
  //   nameInput: {
  //     marginTop: 10,
  //     paddingBottom: 7,
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#bdbdbd",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
  //   locationInputWrap: {
  //     position: "relative",
  //     marginTop: 10,
  //   },
  //   locationInput: {
  //     paddingLeft: 28,
  //     paddingBottom: 7,
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#bdbdbd",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
  //   locationIcon: {
  //     position: "absolute",
  //     top: -3,
  //   },
  //   publishBtn: {
  //     height: 40,
  //     marginTop: 20,
  //     marginBottom: 16,
  //     alignItems: "center",
  //     backgroundColor: "#f6f6f6",
  //     paddingVertical: 6,
  //     paddingHorizontal: 70,
  //     borderRadius: 50,
  //   },
  //   publishBtnIsActive: {
  //     backgroundColor: "#ff6c00",
  //   },
  //   textPublishBtn: {
  //     color: "#bdbdbd",
  //     fontSize: 16,
  //     lineHeight: 19,
  //   },
  //   textPublishBtnIsActive: {
  //     color: "#fff",
  //   },
  //   flipContainer: {
  //     position: "absolute",
  //     bottom: 10,
  //     right: 10,
  //     flex: 1,
  //   },
  // });

  // export const CreatePostsScreen = () => {
  //   const navigation = useNavigation();
  //   const [hasPermission, setHasPermission] = useState(null);
  //   const [cameraRef, setCameraRef] = useState(null);
  //   const [type, setType] = useState(Camera.Constants.Type.back);
  //   const [image, setImage] = useState("");
  //   const [name, setName] = useState("");
  //   const [nameLocation, setNameLocation] = useState(null);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     (async () => {
  //       const { status } = await Camera.requestCameraPermissionsAsync();
  //       await MediaLibrary.requestPermissionsAsync();
  //       setHasPermission(status === "granted");
  //       let locationPermission =
  //         await Location.requestForegroundPermissionsAsync();
  //       if (locationPermission.status !== "granted") {
  //         console.log("Permission to access location was denied");
  //       }
  //     })();
  //   }, []);
  //   if (!hasPermission) {
  //     return <Text>No access to camera</Text>;
  //   }
  const saveFoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };
  //   const onPublish = async () => {
  //     if (!photo) return;
  //     try {
  //       let location = await Location.getCurrentPositionAsync({});
  //       const { uid, displayName } = getAuth(app).currentUser;
  //       const post = { uid, image, location, name, nameLocation, displayName };
  //       await dispatch(addPost(post)).unwrap();
  //       navigation.navigate("Posts", { post });
  //       setName("");
  //       setNameLocation("");
  //       setImage(null);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
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
