import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Tabs/Home";
import UserDetail from "../components/UserDetail";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Button, Image } from "react-native";
import { SimpleLineIcons , AntDesign} from "@expo/vector-icons";
import { LogoIcon, MessegeIcon } from "../components/NavIcon";
import {BackArrowIcon} from "../components/NavIcon";

const Stack = createStackNavigator();
const Container = styled.TouchableOpacity`
  padding-right : 20px;

`;
const LogoContainer = styled.TouchableOpacity`
  margin-left : 12px;
`;
const View = styled.View`
  margin-left : 12px;
`;


export default ({navigation}) => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#fafafa" },
          headerLeft: () => (
            <LogoContainer>
              <LogoIcon />
            </LogoContainer>
          ),
          headerRight: () => (
            <Container
              onPress={() => {
                navigation.navigate("MessageNavigation");
              }}
            >
              <Text>
                {" "}
                <MessegeIcon />
              </Text>
            </Container>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          
        }}
      />
    </Stack.Navigator>
  );
};
