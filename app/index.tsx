import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router';

const SplashScreen = () => {

  useEffect(()=>{
    setTimeout(() => {
      router.navigate("auth/register");
    }, 1000);
  },[])

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})