import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { POST_FRAGMENT, USER_FRAGMENT } from "../../fragments";
import { useQuery } from "react-apollo-hooks";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loader from "../../components/Loader";
import { Image, ScrollView } from "react-native";
import { Post } from "../../components/Post";
import UserProfile from "../../components/userProfile";
const POST_DETAIL = gql`
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
export default ({route})=> {
    
    const {data,loading} = useQuery(POST_DETAIL,{
        variables:{
            userName:route.params.userName
        }
    })

    return (
      <ScrollView style={{marginTop:21}}>
        {loading ? <Loader/> : data?.seeUser && <UserProfile {...data?.seeUser}/>}
      </ScrollView>
    );
}