import React, { useRef, useState } from "react";
import { Text, AsyncStorage, Button, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION } from "../components/graphql/mutations/login.js";
import { SIGNUP_MUTATION } from "../components/graphql/mutations/signup.js";
import { Input } from "react-native-elements";
import useForm from "react-hook-form";

export const SignInScreen = props => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errorMsg, setError] = useState("");

  const [login] = useMutation(LOGIN_MUTATION);
  const [
    signup,
    { loading: signup_loading, error: signup_error }
  ] = useMutation(SIGNUP_MUTATION);

  const _signInAsync = async token => {
    await AsyncStorage.setItem("userToken", token);
    props.navigation.navigate("App");
  };

  function _login() {
    console.log(id);
    console.log(pw);

    login({
      variables: { email: id, password: pw }
    })
      .then(({ data }) => {
        _signInAsync(data.login.token);
      })
      .catch(e => {
        if (/email/i.test(e.message)) {
          setError("이메일 장애");
          return;
        }

        if (/password/i.test(e.message)) {
          setError("비번 장애");
          return;
        }

        setError("모르는 장애 : " + e.message);
      });
  }

  return (
    <View>
      {errorMsg != "" && <Text>{errorMsg}</Text>}
      <Input placeholder="아이디" onChangeText={text => setId(text)} />
      <Input placeholder="패스워드" onChangeText={text => setPw(text)} />
      <Button title="로그인" onPress={_login} />
      <Button
        title="회원가입"
        onPress={() =>
          signup({
            variables: {
              name: "test",
              email: "alice@prisma.io",
              password: "secret42"
            }
          })
        }
      />
    </View>
  );
};

SignInScreen.navigationOptions = {
  title: "로그인"
};
