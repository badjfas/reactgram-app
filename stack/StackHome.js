import "react-native-gesture-handler";
import * as React from "react";
import {View,Text,Button,TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Tabs/Home";
import MessagesLink from "../components/MessagesLink";

const Stack = createStackNavigator();

export default () =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name="메인" component={Home} options={{
          title: 'My home',
          headerRight: MessagesLink
          ,
          headerTitleAlign:"center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}/>
        </Stack.Navigator>
    )
}