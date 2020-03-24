import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Tabs/Search";

const Stack = createStackNavigator();

export default () =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="검색" component={Search}/>
        </Stack.Navigator>
    )
}