import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { PostScreen } from "./src/Screens/PostsScreen/PostsScreen";
// import { useFonts } from "expo-font";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Roboto: require("./assets/fonts/Roboto-Black.ttf"),
  // });
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <Login />
      {/* <PostScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
