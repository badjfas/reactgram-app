import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Search from "../screens/Tabs/Search";
import SearchBar from "../components/SearchBar";
import { SearchIcon } from "../components/NavIcon";
import {gql} from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
const Stack = createStackNavigator();

const  SEARCH =gql`
query search($term:String!){
    searchPost(term:$term){
       files{
           Url
       }
       likeCount
       commentCount
    },
    saerchUser(term:$term){
        id
        avatar
        userName
        isFollowing
        isSelf
    }
}`;


export default ({}) =>{

        return (
        <Stack.Navigator headerMode="screen" >
            <Stack.Screen name=" " component={Search} options={{
                headerTitle: () => (
                    <SearchBar  placeholder={"검색"} >
                    </SearchBar>
                ) ,
                headerTitleAlign:"center"
            }} />
        </Stack.Navigator>
    )
}