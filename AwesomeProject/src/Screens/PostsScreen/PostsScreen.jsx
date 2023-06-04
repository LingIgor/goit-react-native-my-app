import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LogOut from "../../images/log-out.png";
import User from "../../images/user.png";
import Grid from "../../images/grid.png";
import Union from "../../images/Union.png";

export const PostScreen = () => {
  return (
    <View style={styles.wrap}>
      <Image source={LogOut} style={styles.logOut}></Image>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={Grid} style={styles.user}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={Union} style={styles.union}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={User} style={styles.user}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    position: "relative",
    width: "100%",
    height: 88,
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },

  title: {
    marginTop: 55,
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
  },

  logOut: {
    position: "absolute",
    width: 24,
    height: 24,
    right: 10,
    top: 54,
  },

  footer: {
    width: "100%",
    height: 83,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#DCDCDC",
    borderTopWidth: 1,
    borderStyle: "solid",
    paddingLeft: 82,
    paddingRight: 82,
  },

  union: {
    marginTop: 12,
  },
  user: {
    marginTop: 9,
  },

  button: {
    marginTop: 9,
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    marginBottom: 16,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
});
