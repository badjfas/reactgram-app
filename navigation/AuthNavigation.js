import "react-native-gesture-handler";
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import AuthHome from "../screens/Auth/AuthHome";
import Login from "../screens/Auth/Login";
import TabNavigation from "../navigation/TabNavigation"
const AuthNavigation = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <AuthNavigation.Navigator initialRouteName="AuthHome" headerMode="none">
                <AuthNavigation.Screen name="SignUp" component={SignUp} />
                <AuthNavigation.Screen name="Confirm" component={Confirm} />
                <AuthNavigation.Screen name="AuthHome" component={AuthHome} />
                <AuthNavigation.Screen name="Login" component={Login} />
            </AuthNavigation.Navigator>
        </NavigationContainer>
    )
}