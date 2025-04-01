import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const RegisterScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Number" />
      <TextInput style={styles.input} placeholder="Email id" />
      <TextInput style={styles.input} placeholder="Password" />

      <TouchableOpacity>
        <Text
          style={{
            paddingHorizontal: 20,
            backgroundColor: "#e37527",
            paddingVertical: 10,
            color: "white",
            borderRadius: 3,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <Text onPress={() => router.navigate("/auth/login")}>
        Login now if already have an account?
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    paddingHorizontal: 15,
  },
});
