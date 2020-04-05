import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Tabs/Detail";
import styled from "styled-components";
import { BackArrowIcon } from "../components/NavIcon";

const TouchableOpacity = styled.TouchableOpacity``;

const Text = styled.Text``;

const View = styled.View``;

const Stack = createStackNavigator();

export default ({navigation}) =>{
        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name=" " component={Detail} options={{
                headerLeft:()=>(
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Search")}}>
                            <BackArrowIcon size={25} style={{padding:15}}/>
                        </TouchableOpacity>
                    </View>
                )
            }}/>
        </Stack.Navigator>
    )
}