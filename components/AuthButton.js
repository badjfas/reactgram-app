import * as React from "react";
import styled from "styled-components";
import constants from "../constants";
import { ActivityIndicator } from "react-native";

const Tochable = styled.TouchableOpacity`

`;

const Container = styled.View`
background-color : ${props => props.theme.blueColor};
padding:10px 0px;
width:${constants.width-150};
border-radius : 5px;
margin-bottom:25px;
`;

const Text = styled.Text`
color:white;
text-align:center;
font-weight:600;
`;

const AuthButton = ({text,onPress,loading=false}) => (
    <Tochable disabled={loading} onPress={onPress}>
        <Container>
                {loading ? <ActivityIndicator color={"white"}/> : <Text>{text}</Text>}
        </Container>
    </Tochable>
)

export default AuthButton;