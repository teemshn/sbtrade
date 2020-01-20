import React, { useState } from "react";
import {
  AsyncStorage,
  StatusBar,
  View,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Button, Input } from "react-native-elements";
import Theme from "../constant/Theme.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationActions } from "react-navigation";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item"
  }
];

export const BuySearchScreen = props => {
  const [keyword, setKeyword] = useState("");
  const { state, goBack } = props.navigation;
  const params = state.params || {};

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View
      style={{
        alignItems: "center",
        marginVertical: 10
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          width: "100%",
          paddingBottom: 10,
          paddingHorizontal: 20,
          shadowOffset: { width: 0, height: 40 },
          shadowColor: "black",
          shadowOpacity: 0.8,
          elevation: 5,
          backgroundColor: "#FAFAFA",
          borderWidth: 0
        }}
      >
        <Input
          placeholder="검색"
          placeholderTextColor={Theme.COLORS.PLACEHOLDER}
          leftIcon={
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => goBack()}
            >
              <Icon
                name="chevron-left"
                size={20}
                color={Theme.COLORS.PRIMARY}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          }
          rightIcon={
            <Icon
              name="times-circle"
              size={20}
              color={Theme.COLORS.PRIMARY}
              style={{ marginRight: 10 }}
            />
          }
          containerStyle={{
            height: 45,
            marginTop: 15,
            width: "100%",
            backgroundColor: "#eeeeee",
            borderRadius: 20,
            paddingLeft: 5
          }}
          inputContainerStyle={{
            borderBottomWidth: 0
          }}
          onChangeText={text => setKeyword(text)}
        />
      </View>
      <SafeAreaView style={{ width: "100%" }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 125 }}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

function Item({ contents }) {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%"
        }}
      >
        <View style={{ alignItems: "center" }}>
          {/* {contents.user.profile} */}
          <TouchableOpacity
            style={{ alignItems: "center", margin: 10, marginLeft: 0 }}
          >
            <View
              style={{
                backgroundColor: Theme.COLORS.PRIMARY,
                opacity: 0.8,
                borderRadius: 30
              }}
            >
              <Icon
                name="user-tie"
                size={16}
                color="white"
                style={{
                  margin: 15
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          {/* <Text>{contents.title}</Text> */}
          <Text
            style={{
              color: Theme.COLORS.SECOND,
              fontWeight: "bold",
              fontSize: 14
            }}
          >
            컨텐츠의 제목입니다
          </Text>
          {/* <Text>{contents.user.nickname}</Text> */}
          <Text
            style={{
              color: Theme.COLORS.PLACEHOLDER,
              fontSize: 12
            }}
          >
            닉네임
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 6, width: "100%" }}>
        <View
          style={{
            flex: 6,
            backgroundColor: Theme.COLORS.PRIMARY,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 10,
            height: 200
          }}
        >
          {/* <Text>{contents.thumbnail}</Text> */}
          <Text
            style={[
              styles.text,
              {
                fontSize: 20,
                padding: 20,
                margin: 10,
                borderColor: "white",
                borderWidth: 1
              }
            ]}
          >
            Thumbnail
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 7, flexDirection: "row" }}>
            {/* <Text>{contents.hashtags}</Text> */}
            <Text
              style={{
                color: Theme.COLORS.SECOND,
                opacity: 0.5,
                fontSize: 12,
                margin: 5
              }}
            >
              #해시태그1
            </Text>
            <Text
              style={{
                color: Theme.COLORS.SECOND,
                opacity: 0.5,
                fontSize: 12,
                margin: 5
              }}
            >
              #해시태그2
            </Text>
            <Text
              style={{
                color: Theme.COLORS.SECOND,
                opacity: 0.5,
                fontSize: 12,
                margin: 5
              }}
            >
              #해시태그3
            </Text>
          </View>
          <View style={{ flex: 3, alignItems: "flex-end" }}>
            {/* <Text>{contents.uptime}</Text> */}
            <Text
              style={{
                color: Theme.COLORS.PLACEHOLDER,
                fontSize: 11,
                margin: 5
              }}
            >
              3분전
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

BuySearchScreen.navigationOptions = {
  title: "구매"
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
