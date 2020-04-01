import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import styled from "styled-components";
import SearchPresenter from "./SearchPresenter";
import { useNavigation } from "@react-navigation/native";
import useInput from "../../../hooks/useInput";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";



export const SEARCH = gql`
query search($term:String!){
    searchPost(term:$term){
        id
       files{
           Url
       }
       likeCount
       commentCount
    }
}`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => {
    const termInput = useInput("");

    const {data,loading} = useQuery(SEARCH,{
        skip:termInput.value===undefined,
        variables:{
            term:termInput.value,
        },
        fetchPolicy:"network-only"
    })

    const handleSearch = () =>{
        const {value : term} = termInput;
    }

    navigation.setOptions({
        headerTitle: ()=>(
            <SearchBar {...termInput} />
        )
    })
    return (
      <SearchPresenter term={termInput} data={data} loading={loading}/>
    )}