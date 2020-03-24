import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Tabs/Home";
import MessagesLink from "../components/MessagesLink";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Button, ColorPropType } from "react-native";

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="메인"
        component={Home}
        options={{
          title: "My home",
          headerRight: () => (
            <TouchableOpacity
              title="Hioooo"
              onPress={() => {
                navigation.navigate("MessageNavigation");
              }}
            >
              <Text>Messages</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: "center"
        }}
      />
    </Stack.Navigator>
  );
};
