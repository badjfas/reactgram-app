import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { LOGIN } from "./AuthQuries";
import { useLogIn } from "../../AuthContext";



const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => {
  const logIn = useLogIn();
  const emailInput = useInput("");
  const [loading, setLoading] = useState(false);
  const  [requestSecretMutation] = useMutation(LOGIN,{variables:{
    email:emailInput.value
  }});

  const handleLogin =async () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
    try{
      setLoading(true);
      const {data:{requestSecret}} = await requestSecretMutation();
      if(requestSecret){
        Alert.alert("로그인 코드를 확인 해주세요.");
        navigation.navigate("Confirm", {email:value});
        return;
      }else{
        Alert.alert("등록된 이메일이 없습니다.")
      }
    }catch(e){
      console.log(e);
      Alert.alert("로그인 할 수 없습니다.");
    }finally{
      setLoading(false)
    }
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View>
        <AuthInput
          {...emailInput}
          placeholder={"이메일 주소를 입력해 주세요."}
          keyboardType="email-address"
          onSubmitEditing={handleLogin}
          autoCorrect={false}
        />
        <AuthButton loading={loading }text={"로그인"} onPress={handleLogin} />


      </View>
    </TouchableWithoutFeedback>
  );
};
