import React, { useEffect } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { useRoute } from "@react-navigation/native";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../../fragments";
import { ScrollView } from "react-native";
import { useQuery } from "react-apollo-hooks";
import UserProfile from "../../components/UserProfile"
const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const ME = gql`
  {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export default ({ navigation }) => {
  const { data, loading } = useQuery(ME);
  console.log(data.me,"Query ME Call");

return <ScrollView>{loading ? <Loader/> : data?.me && <UserProfile {...data.me} /> }</ScrollView>;
};
