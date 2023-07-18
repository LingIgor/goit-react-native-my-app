import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../Screens/Home/Home";
import { MapScreen } from "../Screens/MapScreen/MapScreen";
import { CommentsScreen } from "../Screens/CommentsScreen/CommentsScreen";

import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export const AppScreen = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            title: "Коментарі",
            headerBackTitleVisible: false,
            headerTintColor: "#212121",
          }}
        />
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
