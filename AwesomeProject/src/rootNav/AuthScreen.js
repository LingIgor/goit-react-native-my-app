import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export const AuthScreen = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
