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

const textInput = ({
  autoCapitalize = "none",
  placeholder,
  keyboardType = "default",
  onChange,
  setValue,
  value,
  onSubmitEditing = () => null,
  autoCorrect = true,
}) => (
  <Container>
    <TextInput
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      autoCorrect={autoCorrect}
      value={value}
    />
  </Container>
);

export default textInput;
