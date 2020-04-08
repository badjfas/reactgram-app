

import React from "react";
import styled from 'styled-components';
import SearchBar from "../../../components/SearchBar";
import SearchPresenter from "./SearchPresenter";
import { useNavigation } from "@react-navigation/native";
const Text = styled.Text``;

export default class extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      term: "",
      shouldFetch: false
    };

  
  }
  onChange = text => {
    const { navigation } = this.props;
    this.setState({ term: text, shouldFetch: false });
    navigation.setParams({
      term: text
    });
  };
  onSubmit = () => {
    this.setState({ shouldFetch: true });
  };

  render() {
    const { navigation } = this.props;

  navigation.setOptions({
    headerTitle: () => (
      <SearchBar value={term} onChange={this.onChange} onSubmit={this.onSubmit} />
    ),
  });

    const { term, shouldFetch } = this.state;
    return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
  }
}