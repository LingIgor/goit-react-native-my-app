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
import { authSignUp } from "../../redux/auth/authOperations";

import BackPhoto from "../../images/PhotoBG.png";
import AddIcon from "../../images/add.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  email: "",
  password: "",
  username: "",
};

export const RegistrationScreen = () => {
  // const [login, setLogin] = useState("");
  // const [mail, setMail] = useState("");
  // const [pass, setPass] = useState("");

  const [state, setState] = useState(initialState);
  const loggedIn = useSelector((state) => state.auth.uid);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (state.email === "" || state.password === "" || state.username === "") {
      Alert.alert("some of the fields are not filled");
      return;
    }
    try {
      await dispatch(authSignUp(state)).unwrap();
      if (loggedIn !== false) {
        navigation.navigate("Home", { screen: "Posts" });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrap}>
        <ImageBackground source={BackPhoto} style={styles.image}>
          <View style={styles.main}>
            <View style={styles.userImage}></View>
            <Image source={AddIcon} style={styles.addImage}></Image>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.wrapper}>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                value={state.username}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, username: value }))
                }
              ></TextInput>
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.registration}>Зареєструватись</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
            {/* <Button title="Зареєструватись" style={styles.registration} />
          <TouchableOpacity>
            <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity> */}
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
    height: 549,
    flex: 0,
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  userImage: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addImage: {
    position: "absolute",
    top: 21,
    left: "68%",
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
    color: "#fff",
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

    top: 309,
    right: 32,
  },
});
