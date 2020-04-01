import React, { useState } from "react";
import { ScrollView, RefreshControl, Text } from "react-native";

import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../../components/Loader";
import SquarePhoto from "../../../components/SquarePhoto";
import { Post } from "../../../components/Post";


const SearchPresenter = ({data,loading}) => {
console.log(data);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async() => {
      try{
        setRefreshing(true);
        await refetch({variables:{data}})
      }catch(e){

      }finally{
          setRefreshing(false);
      }
  }

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.searchPost &&
        data.searchPost.map(post => <SquarePhoto key={post.id} {...post}/>)
      )}
    </ScrollView>
  );
};


export default SearchPresenter;