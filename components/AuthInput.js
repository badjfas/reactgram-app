import React from "react";
import styled from "styled-components";

const Container = styled.View`
    margin-bottom:10px;
`;

const TextInput = styled.TextInput``;

const AuthInput = ({placeholder,value,keyboardType="default"}) => (
    <Container>
        <TextInput placeholder={placeholder} value={value} keyboardType={keyboardType}/>
    </Container>
)

export default AuthInput;