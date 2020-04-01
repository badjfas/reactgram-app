import React from "react";
import styled from "styled-components";
import constants from "../constants";
import { SearchIcon } from "./NavIcon";
import styles from "../styles";

const Container = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const TextInput = styled.TextInput`

`;

const SearchBar = ({ onChange, value, onSubmit }) => (
  <TextInput
    style={{
      width: constants.width - 35,
      height: 35,
      backgroundColor: styles.lightGreyColor,
      padding: 10,
      borderRadius: 5,
      textAlign: "center",
      
    }}
    returnKeyType="search"
    onChangeText={onChange}
    onEndEditing={onSubmit}
    value={value}
    placeholder={"Search"}
    placeholderTextColor={styles.darkGreyColor}
  />
);

export default SearchBar;
