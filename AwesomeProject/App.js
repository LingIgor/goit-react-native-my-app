import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { PostScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/Screens/Home/Home";
import { CommentsScreen } from "./src/Screens/CommentsScreen/CommentsScreen";
import { MapScreen } from "./src/Screens/MapScreen/MapScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Posts" component={PostScreen} />
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
