import React from "react";
import { View } from "react-native";
import {
  useIsLoggedIn,

} from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn(true);

  return <MainNavigation/>
};
