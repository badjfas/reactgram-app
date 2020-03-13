import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  useIsLoggedIn,
  useLogIn,
  useLogOut
} from "../AuthContext";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logIn}>
          <Text>In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
