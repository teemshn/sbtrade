import React from "react";
import { AsyncStorage, View, Text, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../constant/Theme.js";

export const HomeScreen = props => {
  const _showMoreApp = screenName => {
    props.navigation.navigate(screenName);
  };

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        margin: 10
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 2
        }}
      >
        <View
          style={{
            alignItems: "flex-end",
            flexDirection: "row",
            flex: 7,
            marginHorizontal: 15,
            height: "100%"
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                color: Theme.COLORS.SECOND
              }}
            >
              성북거래소 입니다.
            </Text>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                color: Theme.COLORS.SECOND
              }}
            >
              메뉴를 선택해주세요.
            </Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => _showMoreApp("BuySearch")}
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
                size={20}
                color="white"
                style={{
                  margin: 15
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 9, marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              margin: 20
            }}
            onPress={() => _showMoreApp("BuySearch")}
          >
            <View
              style={{
                backgroundColor: Theme.COLORS.SECOND,
                borderRadius: 30,
                marginVertical: 10
              }}
            >
              <Icon
                name="search-dollar"
                size={25}
                color="white"
                style={{
                  margin: 10
                }}
              />
            </View>
            <Text style={{ fontWeight: "bold", opacity: 0.7 }}>구매</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", margin: 20 }}
            onPress={() => _showMoreApp("SaleSearch")}
          >
            <View
              style={{
                backgroundColor: Theme.COLORS.SECOND,
                borderRadius: 30,
                marginVertical: 10
              }}
            >
              <Icon
                name="donate"
                size={25}
                color="white"
                style={{
                  margin: 10
                }}
              />
            </View>
            <Text style={{ fontWeight: "bold", opacity: 0.7 }}>판매</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", margin: 20 }}
            onPress={() => _showMoreApp("BuyList")}
          >
            <View
              style={{
                backgroundColor: Theme.COLORS.SECOND,
                borderRadius: 30,
                marginVertical: 10
              }}
            >
              <Icon
                name="hand-holding-usd"
                size={25}
                color="white"
                style={{
                  margin: 10
                }}
              />
            </View>
            <Text style={{ fontWeight: "bold", opacity: 0.7 }}>구매중</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", margin: 20 }}
            onPress={() => _showMoreApp("SaleList")}
          >
            <View
              style={{
                backgroundColor: Theme.COLORS.SECOND,
                borderRadius: 30,
                marginVertical: 10
              }}
            >
              <Icon
                name="comments-dollar"
                size={25}
                color="white"
                style={{
                  margin: 10
                }}
              />
            </View>
            <Text style={{ fontWeight: "bold", opacity: 0.7 }}>판매중</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20
          }}
        >
          <TouchableOpacity onPress={() => _showMoreApp("SaleList")}>
            <View
              style={{
                borderWidth: 1,
                borderColor: Theme.COLORS.PLACEHOLDER,
                flexDirection: "row",
                padding: 15,
                alignItems: "center"
              }}
            >
              <View style={{ alignItems: "flex-start", flex: 7 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    paddingVertical: 10
                  }}
                >
                  지금 사업자로 등록하세요!
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#999999"
                  }}
                >
                  사업자를 등록하면 모든 서비스를
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#999999"
                  }}
                >
                  이용 할 수 있습어요!
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    color: Theme.COLORS.PRIMARY,
                    paddingVertical: 5
                  }}
                >
                  사업자 등록하기 >
                </Text>
              </View>
              <View style={{ alignItems: "center", flex: 3 }}>
                <Icon
                  name="id-card-alt"
                  size={40}
                  color={Theme.COLORS.PRIMARY}
                  style={{
                    margin: 10
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: "홈"
};
