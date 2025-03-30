import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const LoaderComponent = () => {
  const [loaderWidth, setLoaderWidth] = useState(1);

  useEffect(() => {
    console.log(loaderWidth);
    const interval = setTimeout(() => {
      if (loaderWidth < 100) {
        setLoaderWidth(loaderWidth + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
  }, [loaderWidth]);

  return (
    <View style={styles.ribbonParent}>
      <View
        style={[styles.ribbonChildren, { width: `${loaderWidth}%` }]}
      />
    </View>
  );
};

export default LoaderComponent;

const styles = StyleSheet.create({
  ribbonParent: {
    width: "94%",
    height: 20,
    borderRadius: 10,
  },
  ribbonChildren: {
    backgroundColor: "red",
    height: 20,
    borderRadius: 10,
  },
});
