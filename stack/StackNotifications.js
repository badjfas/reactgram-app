import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notifications from "../screens/Tabs/Notifications";

const Stack = createStackNavigator();

export default () =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="Notifications" component={Notifications}/>
        </Stack.Navigator>
    )
}