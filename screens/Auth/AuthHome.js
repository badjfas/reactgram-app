import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";

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

const LoginLink = styled.View`

`;

const LoginLinkText = styled.Text`
  font-weight:900;
  color:${props => props.theme.blueColor};
`;

export default ({ navigation }) => (
  <View>
    <Image resizeMode="contain" source={require("../../assets/logo.png")}/>
    <AuthButton text={"새로운 계정 만들기"} onPress={()=>navigation.navigate("SignUp")} />
    <Tochable onPress={()=>navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>
          로그인
        </LoginLinkText>
      </LoginLink> 
    </Tochable>
  </View>
);