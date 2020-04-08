import "react-native-gesture-handler";
import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";

import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const PhotoTabs= ({navigation}) => {
    return(
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="사진" component={SelectPhoto} options={{
                tabBarLabel:"사진"
            }}/>
            <Tab.Screen name="카메라" component={TakePhoto} options={{
                tabBarLabel:"카메라"
            }}/>
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

export default ({navigation,scene}) =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="PhotoTabs" component={PhotoTabs} options={{
                headerTitle:()=><Text>사진</Text>
            }}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto}/>
        </Stack.Navigator>
    )
}