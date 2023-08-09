import {
  View,
  Button,
  TextInput,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import BackPhoto from "../../images/PhotoBG.png";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { authSingIn } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import storage from "../../../storage";
import app from "../../../firebase/config";

const auth = getAuth(app);

const initialState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [state, setState] = useState(initialState);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const registr = async () => {
    if (state.email === "" || state.password === "") {
      Alert.alert("some of the fields are not filled");
      return;
    }
    try {
      await dispatch(authSingIn(state)).unwrap();
      storage.save({
        key: "login",
        data: {
          user: auth.currentUser,
        },
      });
    } catch (e) {
      // Alert.alert("registration please");
      // navigation.navigate("Registration");
      console.error(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrap}>
        <ImageBackground source={BackPhoto} style={styles.image}>
          <View style={styles.main}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.wrapper}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.shown}>
              <Text style={styles.logIn}>Показати</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.registration} onPress={registr}>
                Увійти
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.logIn}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,

    justifyContent: "flex-end",
  },

  main: {
    height: 489,
    flex: 0,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 111,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },

  wrapper: {
    position: "relative",
    display: "flex",
    gap: 16,
    marginBottom: 43,
  },
  input: {
    fontSize: 16,
    height: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 16,
    color: "black",
  },

  registration: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 16,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginBottom: 16,
  },

  logIn: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
  },

  shown: {
    position: "absolute",

    top: 184,
    right: 32,
  },
});
