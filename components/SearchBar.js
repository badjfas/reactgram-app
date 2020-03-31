import React from "react";
import styled from "styled-components";
import constants from "../constants";
import { SearchIcon } from "./NavIcon";

const Container = styled.View`
  margin-bottom: 10px;
  margin-top:10px;
`;

const TextInput = styled.TextInput`
  width: ${constants.width /1.2};
  padding: 10px;
  background-color: ${props => props.theme.lightGreyColor};
  border: 1px solid ${props => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const SearchBar = ({
  autoCapitalize = "none",
  placeholder,
  keyboardType = "default",
  onChange,
  onSubmit,
  value,
  onSubmitEditing = () => null,
  autoCorrect = true,
}) =>{

    return(
     <Container>
       <TextInput
         autoCapitalize={autoCapitalize}
         placeholder={placeholder}
         keyboardType={keyboardType}
         onChangeText={onChange}
         onSubmitEditing={onSubmitEditing}
         autoCorrect={autoCorrect}
         value={value}
       ></TextInput>
     </Container>
    )
}

export default SearchBar;
