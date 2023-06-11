import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
