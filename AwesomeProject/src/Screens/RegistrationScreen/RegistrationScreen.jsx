import {
  View,
  Button,
  TextInput,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

import BackPhoto from "../../images/PhotoBG.png";
import AddIcon from "../../images/add.png";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrap}>
      <ImageBackground source={BackPhoto} style={styles.image}>
        <View style={styles.main}>
          <View style={styles.userImage}></View>
          <Image source={AddIcon} style={styles.addImage}></Image>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.wrapper}>
            <TextInput style={styles.input} placeholder="Логін"></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            ></TextInput>
            <TextInput style={styles.input} placeholder="Пароль"></TextInput>
          </View>
          <TouchableOpacity style={styles.shown}>
            <Text style={styles.logIn}>Показати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.registration}>Зареєструватись</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
          {/* <Button title="Зареєструватись" style={styles.registration} />
          <TouchableOpacity>
            <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>
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
    color: "#BDBDBD",
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
