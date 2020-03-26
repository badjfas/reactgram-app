import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM_SECRET } from "./AuthQuries";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useLogIn } from "../../AuthContext";


const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation,route}) => {
  const secretCodeInput = useInput("");
  const logIn = useLogIn();
  const [loading, setLoading] = useState(false);
  const  [confirmSecretMutation] = useMutation(CONFIRM_SECRET,{variables:{
    secret:secretCodeInput.value,
    email: route.params.email
  }});
  const handleConfirm =async () => {
    const { value } = secretCodeInput;
    if (value === "" || !value.includes(" ")) {
      return Alert.alert("형식에 맞지 않습니다.");
    }
    try {
      setLoading(true);
      const {
        data: { confirmSecret }
      } = await confirmSecretMutation();
      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("Wrong secret!");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't confirm secret");
    } finally {
      setLoading(false);
    }
  };

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View>
        <AuthInput
          {...secretCodeInput}
          placeholder={"로그인 코드를 입력 해주세요."}
          keyboardType="default"
          onSubmitEditing={handleConfirm}
          autoCorrect={false}
        />
        <AuthButton loading={loading} text={"인증하기"} onPress={handleConfirm} />
      </View>
    </TouchableWithoutFeedback>
  );
}