import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Search from "../screens/Tabs/Search";
import Detail from "../screens/Tabs/Detail";
import UserDetail from "../components/UserDetail";
import Profile from "../screens/Tabs/Profile";

const Stack = createStackNavigator();


export default ({}) =>{
        return (
          <Stack.Navigator headerMode="screen">
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="UserDetail" component={UserDetail} />           
          </Stack.Navigator>
        );
}