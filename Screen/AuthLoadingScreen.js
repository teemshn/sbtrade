import React from "react";
import {
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  View,
  StyleSheet,
  Text
} from "react-native";
import Theme from "../constant/Theme.js";

export const AuthLoadingScreen = props => {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    props.navigation.navigate(userToken ? "App" : "Auth");
  };

  _bootstrapAsync();

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 20,
              padding: 20,
              marginVertical: 10,
              borderColor: "white",
              borderWidth: 1
            }
          ]}
        >
          APPMARK
        </Text>
        <Text style={styles.text}>SeungBook Trade App</Text>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Theme.COLORS.PRIMARY}
      />
      <View style={styles.tail}>
        <Text style={styles.text}>ⓒ TeemShn</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.PRIMARY,
    flex: 1
  },
  contents: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  tail: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30
  },
  icon: {},
  text: {
    color: "white",
    opacity: 0.6,
    fontWeight: "bold"
  }
});
