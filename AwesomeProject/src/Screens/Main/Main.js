// // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from "react-native";
// import { Login } from "../LoginScreen/LoginScreen";
// import { RegistrationScreen } from "../RegistrationScreen/RegistrationScreen";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Home } from "../Home/Home";
// import { CommentsScreen } from "../CommentsScreen/CommentsScreen";
// import { MapScreen } from "../MapScreen/MapScreen";
// // import { useSelector } from "react-redux";
// // import { useEffect, useState } from "react";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth } from "../../firebase/config";

// const MainStack = createStackNavigator();

// export const Main = () => {
//   return (
//     <NavigationContainer>
//       <MainStack.Navigator
//         initialRouteName="Login"
//         screenOptions={{ headerShown: false }}
//       >
//         <MainStack.Screen name="Registration" component={RegistrationScreen} />
//         <MainStack.Screen name="Login" component={Login} />
//         <MainStack.Screen name="Home" component={Home} />
//         <MainStack.Screen
//           name="Comments"
//           component={CommentsScreen}
//           options={{
//             headerShown: true,
//             title: "Коментарі",
//             headerBackTitleVisible: false,
//             headerTintColor: "#212121",
//           }}
//         />
//         <MainStack.Screen name="Map" component={MapScreen} />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// };
