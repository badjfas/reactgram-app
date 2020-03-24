import "react-native-gesture-handler";
import * as React from "react";
import styled from "styled-components";

import { withNavigation } from "react-navigation";

const Container = styled.Button``;
const Text = styled.Text``;

export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("MessageNavigation")}>
    <Text>Messages</Text>
  </Container>
));