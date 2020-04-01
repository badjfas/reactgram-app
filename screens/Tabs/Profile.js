import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { useRoute } from "@react-navigation/native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => {
  const route = useRoute();
  const {termInput} =route.params?.termInput ?? "error"
  console.log(termInput,"params");
  return(
  <View>
    <Text>
    {termInput,"asdasd"}
    </Text>
  </View>
);}