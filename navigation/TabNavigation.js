import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome ,Foundation, MaterialCommunityIcons ,Feather } from "@expo/vector-icons";

import Home from "../stack/StackHome";
import Search from "../stack/StackSearch";
import Notifications from "../stack/StackNotifications";
import Profile from "../stack/StackProfile";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import { HomeIcon, AddIcon, SearchIcon, NotificationIcon, ProfileIcon } from "../components/NavIcon";
import styles from "../styles";

const Tab = createBottomTabNavigator();

const Container =styled.TouchableOpacity`
  padding-top:5px;
`;
export default ({navigation}) => {
  return (
      <Tab.Navigator tabBarOptions={{showLabel:false ,style:{backgroundColor:"#fafafa"}} }>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({focused})=>(
              <HomeIcon color={focused?styles.blackColor:styles.darkGreyColor}/>
          )
        }}/>
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon:({focused})=>(
            <SearchIcon color={focused?styles.blackColor:styles.darkGreyColor}/>
          )
        }}/>
        <Tab.Screen
          name="Add"
          component={View} 
          options={{
            tabBarIcon:({focused})=>(
              <Container onPress={()=>{
                navigation.navigate("PhotoNavigation")
              }}>
                <AddIcon color={focused?styles.blackColor:styles.darkGreyColor}/>
              </Container>
            ),
          }}
        />
        <Tab.Screen name="Notifications" component={Notifications} options={{
          tabBarIcon:({focused})=>(
            <NotificationIcon color={focused?styles.blackColor:styles.darkGreyColor} name={focused?"md-heart":"md-heart-empty"}/>
            )
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon:({focused})=>(
            <ProfileIcon color={focused?styles.blackColor:styles.darkGreyColor}/>
          )
        }} />
      </Tab.Navigator>
  );
};
