import React from "react";
import styled from "styled-components";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  width: ${constants.width / 1.6};
  padding: 10px;
  background-color: ${props => props.theme.lightGreyColor};
  border: 1px solid ${props => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  autoCapitalize = "none",
  placeholder,
  value,
  keyboardType = "default",
  onChange,
  onEndEditing = () => null,
  autoCorrect = true
}) => (
  <Container>
    <TextInput
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChange}
      onEndEditing={onEndEditing}
      autoCorrect={autoCorrect}
    />
  </Container>
);

export default AuthInput;
