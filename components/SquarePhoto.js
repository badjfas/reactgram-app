import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import constants from "../constants";
import { useNavigation } from "@react-navigation/native";
const SquarePhoto = ({files=[],id}) => {
    const navigation = useNavigation();
    console.log(id,"SqurePhoto");
    return(
    <TouchableOpacity onPress={()=> {navigation.navigate("Detail",{id})}}>
      <Image
        source={{ uri: files[0].Url }}
        style={{ width: constants.width / 3, height: constants.height / 6 }}
      />
    </TouchableOpacity>
    )}

export default SquarePhoto;