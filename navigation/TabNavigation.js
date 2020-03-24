import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import Home from "../stack/StackHome";
import Search from "../stack/StackSearch";
import Notifications from "../stack/StackNotifications";
import Profile from "../stack/StackProfile";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();

export default ({navigation}) => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
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
