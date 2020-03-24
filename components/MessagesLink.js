import "react-native-gesture-handler";
import * as React from "react";
import styled from "styled-components";
import { withNavigation, withNavigationFocus } from "@react-navigation/compat";
import { useNavigation } from "@react-navigation/native";

const Container = styled.TouchableOpacity``;
const Texts = styled.Text``;

export const Test = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("MessageNavigation")}>
      <Texts>Messages</Texts>
    </Container>
  );
};

export default (Test);