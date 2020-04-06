import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "../../fragments";
import { useQuery } from "react-apollo-hooks";
import { useRoute, useNavigation } from "@react-navigation/native";
import Loader from "../../components/Loader";
import { Image, ScrollView } from "react-native";
import { Post } from "../../components/Post";
const POST_DETAIL = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;


const View = styled.View`
  flex:1;
`;
const Text = styled.Text`
`;
export default ({route})=> {
    
    const postId = (route?.params?.data)
    const {data,loading} = useQuery(POST_DETAIL,{
        variables:{
            id:route?.params?.data
        }
    })

    return (
      <ScrollView style={{marginTop:21}}>
        {loading ? <Loader/> : data?.seeFullPost && <Post {...data?.seeFullPost}/>}
      </ScrollView>
    );
}