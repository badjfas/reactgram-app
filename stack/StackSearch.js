import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Profile from "../screens/Tabs/Profile";

import SearchBar from "../components/SearchBar";
import { SearchIcon } from "../components/NavIcon";
import {gql} from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import useInput from "../hooks/useInput";
import Search from "../screens/Tabs/Search";
const Stack = createStackNavigator();


export default ({}) =>{
    const term = useInput("");

        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name=" " component={Search} />
        </Stack.Navigator>
    )
}