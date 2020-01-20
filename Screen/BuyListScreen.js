import React from "react";
import { AsyncStorage, StatusBar, View } from "react-native";
import { Button } from "react-native-elements";

export const BuyListScreen = props => {
  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Button
        buttonStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 30
        }}
        containerStyle={{ marginTop: 20, height: 50, width: 250 }}
        titleStyle={{ fontWeight: "bold", color: "black" }}
        title="로그아웃"
        onPress={_signOutAsync}
      />
      <StatusBar barStyle="default" />
    </View>
  );
};

BuyListScreen.navigationOptions = {
  title: "구매중"
};
