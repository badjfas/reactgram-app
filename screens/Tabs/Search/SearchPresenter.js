import React, { useState, useEffect } from "react";
import { ScrollView, RefreshControl, Text } from "react-native";

import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../../components/Loader";
import SquarePhoto from "../../../components/SquarePhoto";
import { Post } from "../../../components/Post";


export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        id
        Url
      }
      likeCount
      commentCount
    }
  }
`;

const SearchPresenter = ({ term, shouldFetch }) => {
  useEffect(()=>{
    if(shouldFetch===true){
      console.log(term);
    }
  },[shouldFetch])
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(SEARCH, {
    variables: {
      term
    },
    skip: !shouldFetch,
    fetchPolicy: "network-only"
  });
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch({ variables: { term } });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.searchPost &&
        data.searchPost.map(post => <SquarePhoto key={post.id} {...post} />)
      )}
    </ScrollView>
  );
};

export default SearchPresenter;