import React, { useRef, useState } from "react";
import { Text, StyleSheet, AsyncStorage, View, StatusBar } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION } from "../components/graphql/mutations/login.js";
import { SIGNUP_MUTATION } from "../components/graphql/mutations/signup.js";
import { Input } from "react-native-elements";
import Button from "../components/Button/Button.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import Theme from "../constant/Theme.js";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      {errorMsg != "" && <Text>{errorMsg}</Text>}
      <View style={{ alignItems: "center", justifyContent: "center", flex: 4 }}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 20,
              padding: 15,
              marginVertical: 15,
              backgroundColor: Theme.COLORS.PRIMARY,
              borderRadius: 10,
              opacity: 0.9
            }
          ]}
        >
          MARK
        </Text>
        <Text
          style={{ fontSize: 20, marginTop: 30, color: Theme.COLORS.SECOND }}
        >
          SBTrade
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginTop: 8,
            color: Theme.COLORS.PLACEHOLDER
          }}
        >
          합리적인 사업자 거래 시스템
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 7,
          paddingBottom: 30,
          paddingHorizontal: 30,
          width: "100%"
        }}
      >
        <Input
          placeholder="아이디"
          placeholderTextColor={Theme.COLORS.PLACEHOLDER}
          leftIcon={
            <Icon
              name="user"
              size={20}
              color={Theme.COLORS.PRIMARY}
              style={{ marginRight: 10 }}
            />
          }
          containerStyle={{
            height: 45,
            marginTop: 15,
            width: "100%",
            backgroundColor: Theme.COLORS.THIRD,
            borderRadius: 20
          }}
          inputContainerStyle={{
            borderBottomWidth: 0
          }}
          onChangeText={text => setId(text)}
        />
        <Input
          placeholder="패스워드"
          placeholderTextColor={Theme.COLORS.PLACEHOLDER}
          leftIcon={
            <Icon
              name="lock"
              size={20}
              color={Theme.COLORS.PRIMARY}
              style={{ marginRight: 10 }}
            />
          }
          containerStyle={{
            height: 45,
            marginTop: 15,
            width: "100%",
            backgroundColor: Theme.COLORS.THIRD,
            borderRadius: 20
          }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          onChangeText={text => setPw(text)}
        />
        <Button
          buttonStyle={{
            backgroundColor: Theme.COLORS.PRIMARY,
            borderRadius: 20
          }}
          containerStyle={{
            marginTop: 15,
            height: 50,
            width: "100%"
          }}
          titleStyle={{ fontWeight: "bold", color: "white", opacity: 0.8 }}
          title="로그인"
          onPress={_login}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
              color: Theme.COLORS.SECOND,
              margin: 5,
              textDecorationLine: "underline"
            }}
          >
            처음 사용하시나요?
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        buttonStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 30
        }}
        containerStyle={{ marginTop: 10, height: 50, width: 250 }}
        titleStyle={{ fontWeight: "bold", color: "black" }}
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
      /> */}
    </View>
  );
};

SignInScreen.navigationOptions = {
  title: "로그인"
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 30,
    flex: 1
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
