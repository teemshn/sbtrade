import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Theme from "../../constant/Theme.js";

export default function(props) {
  const { children, ...myprops } = props;

  return <Button {...myprops}>{children}</Button>;
}
