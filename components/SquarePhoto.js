import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import constants from "../constants";
import { useNavigation } from "@react-navigation/native";
const SquarePhoto = ({files=[],data}) => {
    const navigation = useNavigation();

    return(
    <TouchableOpacity onPress={()=> {navigation.navigate("Detail",{data})}}>
      <Image
        source={{ uri: files[0].Url }}
        style={{ width: constants.width / 3, height: constants.height / 4 }}
      />
    </TouchableOpacity>
    )}

export default SquarePhoto;