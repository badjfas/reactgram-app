import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CREATE_USER } from "./AuthQuries";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";


const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => {
  const email = useInput("");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");

  const [loading, setLoading] = useState(false);
 
  const  [createUserMutation] = useMutation(CREATE_USER,{variables:{
    email:email.value,
    userName:userName.value,
    firstName:firstName.value,
    lastName:lastName.value
  }});

  const handleCreateUser =async() => {
    const { value:emailInput } = email;
    const { value:userNameInput } = userName;
    const { value:firstNameInput } = firstName;
    const { value:lastNameInput } = lastName;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput === "") {
      return Alert.alert("이메일을 입력해주세요.");
    } else if (!emailInput.includes("@") || !emailInput.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(emailInput)) {
      return Alert.alert("That email is invalid");
    }
    if (userNameInput === "") {
      return Alert.alert("닉네임을 입력해주세요.");
    }
    if (firstNameInput === "") {
      return Alert.alert("성을 입력해주세요.");
    }
    if (lastNameInput === "") {
      return Alert.alert("이름을 입력해주세요.");
    }
    try {
      setLoading(true);
      const {
        data: { createAccount }
      } = await createUserMutation();
      Alert.alert("가입 완료");
      navigation.navigate("Login");
      if (createAccount !== "" || createAccount !== false) {
        Alert.alert("잘못된 접근 입니다.");
      } else {
        Alert.alert("잘못된 접근 입니다.");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...email}
          placeholder={"이메일을 입력 해주세요."}
          onSubmitEditing={handleCreateUser}
          keyboardType="email-address"
          autoCorrect={false}
        />
        <AuthInput
          placeholder={"성을 입력 해주세요."}
          keyboardType="default"
          onSubmitEditing={handleCreateUser}
          autoCorrect={false}
          {...firstName}
        />
        <AuthInput
          placeholder={"이름를 입력 해주세요."}
          keyboardType="default"
          onSubmitEditing={handleCreateUser}
          autoCorrect={false}
          {...lastName}
        />
        <AuthInput
          placeholder={"닉네임을 입력 해주세요."}
          keyboardType="default"
          onSubmitEditing={handleCreateUser}
          autoCorrect={false}
          {...userName}
        />
        <AuthButton
          loading={loading}
          text={"가입하기"}
          onPress={handleCreateUser}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}