import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Tabs/Profile";

const Stack = createStackNavigator();

export default ({navigation,route}) =>{
    console.log(route.params)
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="userName" component={Profile}/>
        </Stack.Navigator>
    )
}