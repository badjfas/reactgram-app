import "react-native-gesture-handler";
import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();

const PhotoTabs= ({navigation}) => {
    return(
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="SelectPhoto" component={SelectPhoto}/>
            <Tab.Screen name="TakePhoto" component={TakePhoto}/>
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

export default ({navigation,scene}) =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="PhotoTabs" component={PhotoTabs}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto}/>
        </Stack.Navigator>
    )
}