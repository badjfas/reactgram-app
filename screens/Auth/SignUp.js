import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CREATE_USER } from "./AuthQuries";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as Facebook from "expo-facebook";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FBContainer= styled.View`
padding-top: 25px;
border-top-width: 1px;
border-color: ${props => props.theme.lightGreyColor};
border-style: solid;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const fNameInput = useInput("");
  const lNameInput = useInput("");
  const emailInput = useInput("");
  const usernameInput = useInput("");
  const [loading, setLoading] = useState(false);
  const createAccountMutation = useMutation(CREATE_USER, {
    variables: {
      userName: usernameInput.value,
      email: emailInput.value,
      firstName: fNameInput.value,
      lastName: lNameInput.value
    }
  });
  const handleSingup = async () => {
    const { value: email } = emailInput;
    const { value: fName } = fNameInput;
    const { value: lName } = lNameInput;
    const { value: username } = usernameInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (fName === "") {
      return Alert.alert("I need your name");
    }
    if (username === "") {
      return Alert.alert("Invalid username");
    }
    try {
      setLoading(true);
      const {
        data: { createAccount }
      } = await createAccountMutation();
      if (createAccount) {
        Alert.alert("Account created", "Log in now!");
        navigation.navigate("Login", { email });
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Username taken.", "Log in instead");
      navigation.navigate("Login", { email });
    } finally {
      setLoading(false);
    }
  };

  const fbLogin =  async() => {
    try {
      setLoading(true);
      await Facebook.initializeAsync('1101522433531824');
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,last_name,first_name,email`
        );
        const { email, first_name, last_name , name } = await response.json();
        emailInput.setValue(email);
        fNameInput.setValue(first_name);
        lNameInput.setValue(last_name);
        usernameInput.setValue(name);
        setLoading(false);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder={"이메일을 입력 해주세요."}
          keyboardType="email-address"
        />
        <AuthInput
          placeholder={"성을 입력 해주세요."}
          keyboardType="default"
          {...fNameInput}
        />
        <AuthInput
          placeholder={"이름를 입력 해주세요."}
          keyboardType="default"
          {...lNameInput}
        />
        <AuthInput
          placeholder={"닉네임을 입력 해주세요."}
          keyboardType="default"
          {...usernameInput}
        />
        <AuthButton
          loading={loading}
          text={"가입하기"}
          onPress={handleSingup}
        />
        <FBContainer>
          <AuthButton
            bgColor={"#2D4DA7"}
            loading={false}
            onPress={fbLogin}
            text="FaceBook 로그인"
          />
        </FBContainer>
      </View>
    </TouchableWithoutFeedback>
  );
}