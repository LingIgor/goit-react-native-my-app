import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Map</Text>
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