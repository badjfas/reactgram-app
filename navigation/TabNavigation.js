import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import { createStackNavigator } from "@react-navigation/stack";

const stackFactory = (initialRoute) => createStackNavigator({initialRoute});

const Tab = createBottomTabNavigator();

export default ({navigation}) => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={({route}) =>({
          headerTitle:getHeaderTitle(route)
        })} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen
          name="Add"
          component={View}
          listeners={{
            tabPress: (e)=> {
              e.preventDefault();
              navigation.navigate("PhotoNavigation");
            }
          }}
        />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
};
