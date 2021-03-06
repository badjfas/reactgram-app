import React, { useRef, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";

import { useQuery, useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import {FlatView,ScrollView, RefreshControl} from "react-native"
import { Post } from "../../components/Post";
import { POST_FRAGMENT } from "../../fragments";
 const FEED_QUERY = gql`
  {
    seeFeed {
    ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;



const View = styled.View`
  justify-content: center;
  flex: 1;
`;

const Feed = styled.View`

`;

const Text = styled.Text``;

export default () => {
  const { loading, data, refetch } = useQuery(FEED_QUERY, {
    fetchPolicy:"cache-first"
  });
  const [refreshing,setRefreshing] = useState(false);


  const refresh = async() =>{
    try{
    setRefreshing(true);
    await refetch();
    }catch(e){
      console.log(e)
      setRefreshing(false);
    }
  };

  return (
  <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => <Post key={post.id} {...post} />)
      )}
    </ScrollView>
);}