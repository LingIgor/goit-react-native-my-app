import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
// import { useEffect } from "react";
// import { getAuth } from "firebase/auth";

//   const auth = getAuth();

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const screenOptions = {
    headerStyle: {
      height: 88,
    },
    tabBarStyle: {
      height: 83,
    },
    tabBarShowLabel: false,
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Tabs.Navigator
      options={{
        title: "Home",
      }}
      {...{ screenOptions }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity onPress={handleLogOut}>
              <Feather name="log-out" size={24} color={"grey"} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={"grey"} />
          ),
          tabBarItemStyle: {
            height: 50,
            borderRadius: 20,
            marginTop: 9,
            marginRight: 10,
            marginLeft: 20,
          },
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Створити пост",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Feather.Button
                name="arrow-left"
                size={24}
                color="#212121"
                backgroundColor="#fff"
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color }) => (
            <TouchableOpacity>
              <Ionicons name="add" size={24} color={"white"} />
            </TouchableOpacity>
          ),
          tabBarItemStyle: {
            backgroundColor: "#FF6C00",
            height: 50,
            borderRadius: 20,
            marginTop: 9,
            marginHorizontal: 5,
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль",

          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={"grey"} />
          ),
          tabBarItemStyle: {
            height: 50,
            borderRadius: 20,
            marginTop: 9,
            marginRight: 20,
            marginLeft: 10,
          },
        }}
      />
    </Tabs.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
