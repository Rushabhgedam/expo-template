import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { LegacyRef, useReducer, useRef } from "react";
import { router } from "expo-router";

interface State {
  username: string;
  password: string;
}

const initialState: State = {
  username: "",
  password: "",
};

interface Action {
  type: "update_username" | "update_password";
  payload?: string;
}

const loginReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "update_username":
      return { ...state, username: action.payload || "" };
    case "update_password":
      return { ...state, password: action.payload || "" };
    default:
      return state;
  }
  // return state
};

const LoginScreen = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const passwordInputRef = useRef<TextInput>(null);

  return (
    <ScrollView
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        onSubmitEditing={() => passwordInputRef?.current?.focus}
        onChangeText={(text) =>
          dispatch({ type: "update_username", payload: text })
        }
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        ref={passwordInputRef}
        onChangeText={(text) =>
          dispatch({ type: "update_password", payload: text })
        }
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Text
          onPress={() => router.navigate("/auth/register")}
          style={{ color: "blue" }}
        >
          Register now
        </Text>
        <Text onPress={() => router.navigate("/auth/forget-password")}>
          Forgot password ?
        </Text>
      </View>
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
          Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    paddingHorizontal: 15,
  },
});
