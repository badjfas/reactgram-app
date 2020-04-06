import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { POST_FRAGMENT, USER_FRAGMENT } from "../fragments";
import { useQuery } from "react-apollo-hooks";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";
import { Image, ScrollView } from "react-native";
import UserProfile from "../components/UserProfile";
const GET_USER = gql`
  query seeProfile($userName: String!) {
    seeProfile(userName: $userName) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;


const View = styled.View`
  flex:1;
`;
const Text = styled.Text`
`;
export default ({route,navigation})=> {
    
    const {data,loading} = useQuery(GET_USER,{
        variables:{
            userName:route.params.userName
        }
    })
    
    navigation.setOptions({
        headerTitle: () => <Text>{data.seeProfile.userName} </Text>,
      });

    return (
      <ScrollView style={{marginTop:21}}>
        {loading ? <Loader/> : data?.seeProfile && <UserProfile {...data.seeProfile}/>}
      </ScrollView>
    );
}