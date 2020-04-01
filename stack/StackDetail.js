import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}