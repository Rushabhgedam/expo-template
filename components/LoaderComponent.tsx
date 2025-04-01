import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { router } from "expo-router";


const LoaderComponent = () => {
  const loaderWidth = useSharedValue(0);

  useEffect(() => {
    loaderWidth.value = withTiming(100, {
      duration: 2000,
      easing: Easing.linear,
    }, ()=>{
      runOnJS(router.replace)("/auth/login")
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${loaderWidth.value}%`,
    };
  });

  return (
    <View style={styles.ribbonParent}>
      <Animated.View style={[styles.ribbonChildren, animatedStyle]} />
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
