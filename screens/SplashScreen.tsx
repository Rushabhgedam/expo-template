import React from "react";
import { StyleSheet, View } from "react-native";
import LoaderComponent from "../components/LoaderComponent";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LoaderComponent />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  ribbonParent: {
    width: "94%",
    height: 20,
    borderRadius: 10,
    // alignSelf:"flex-end"
  },
  ribbonChildren: {
    backgroundColor: "red",
    height: 20,
    borderRadius: 10,
  },
});
