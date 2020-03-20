import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mesaage from "../screens/Messages/Message";
import Mesaages from "../screens/Messages/Message";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="" component={}/>
        </Stack.Navigator>
    )
}