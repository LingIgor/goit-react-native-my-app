import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export const MapScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  console.log(params.latitude);
  console.log(params.longitude);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{ latitude: params.latitude, longitude: params.longitude }}
        mapType="standard"
        minZoomLevel={5}
        onMapReady={() => console.log("Map is ready")}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: params.latitude,
            longitude: params.longitude,
          }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
