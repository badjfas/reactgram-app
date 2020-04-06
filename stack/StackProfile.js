import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Tabs/Profile";
import styled from "styled-components";
import { BackArrowIcon } from "../components/NavIcon";
import Search from "../screens/Tabs/Search";
import Home from "../screens/Tabs/Home";
const Stack = createStackNavigator();

const TouchableOpacity = styled.TouchableOpacity``;

const Text = styled.Text``;

const View = styled.View``;

export default ({navigation,route}) =>{
        return (
          <Stack.Navigator headerMode="screen">
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerLeft: () => (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Home");
                      }}
                    >
                      <BackArrowIcon size={25} style={{ padding: 15 }} />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Home" component={Home} />

          </Stack.Navigator>
        );
}