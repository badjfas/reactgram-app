import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "../navigation/TabNavigation";
import PhotoNavigation from "../navigation/PhotoNavigation";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation " headerMode="none" mode="modal">
      <Stack.Screen name="TabNavigation" component={TabNavigation} />

        <Stack.Screen name="PhotoNavigation" component={PhotoNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
