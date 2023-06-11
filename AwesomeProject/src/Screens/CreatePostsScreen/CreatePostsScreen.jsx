import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>CreatePosts</Text>
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
