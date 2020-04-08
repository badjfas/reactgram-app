import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Tabs/Profile";
import styled from "styled-components";
import { BackArrowIcon } from "../components/NavIcon";
import Detail from "../screens/Tabs/Detail";
import Home from "../screens/Tabs/Home";
const Stack = createStackNavigator();

const TouchableOpacity = styled.TouchableOpacity``;

const Text = styled.Text``;

const View = styled.View``;

export default ({navigation,route}) =>{
        return (
          <Stack.Navigator headerMode="screen">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        );
}