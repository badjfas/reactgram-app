import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const Image = styled.Image`
  width: ${constants.width/2};
  height:${constants.height/7}
`;

const Tochable = styled.TouchableOpacity`

`;

const SignUpButton = styled.View`
  background-color : ${props => props.theme.blueColor};
  padding:10px 0px;
  width:${constants.width-150};
  border-radius : 5px;
  margin-bottom:25px;

`;

const SignUpButtonText = styled.Text`
  color:white;
  text-align:center;
  font-weight:600;
`;

const LoginLink = styled.View`

`;

const LoginLinkText = styled.Text`
  font-weight:900;
  color:${props => props.theme.blueColor};
`;

export default ({ navigation }) => (
  <View>
    <Image resizeMode="contain" source={require("../../assets/logo.png")}/>
    <Tochable onPress={()=> navigation.navigate("SignUp")}>
      <SignUpButton>
        <SignUpButtonText>새로운 계정 만들기</SignUpButtonText>
      </SignUpButton>
    </Tochable>
    <Tochable onPress={()=>navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>
          로그인
        </LoginLinkText>
      </LoginLink> 
    </Tochable>
  </View>
);