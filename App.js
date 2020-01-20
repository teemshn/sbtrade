import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  SignInScreen,
  HomeScreen,
  BuySearchScreen,
  SaleSearchScreen,
  BuyListScreen,
  SaleListScreen,
  AuthLoadingScreen
} from "./Screen";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AsyncStorage } from "react-native";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";

const link = new createHttpLink({ uri: "http://192.168.0.27:4000/" });
const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("userToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      //AuthLoading: AuthLoadingScreen,
      AuthLoading: createAnimatedSwitchNavigator(
        { AuthLoading: AuthLoadingScreen },
        {
          transition: (
            <Transition.Together>
              <Transition.In
                type="fade"
                durationMs={500}
                interpolation="easeIn"
              />
              <Transition.Out type="fade" durationMs={500} />
            </Transition.Together>
          )
        }
      ),
      App: createStackNavigator(
        {
          Home: HomeScreen,
          BuySearch: BuySearchScreen,
          SaleSearch: SaleSearchScreen,
          BuyList: BuyListScreen,
          SaleList: SaleListScreen
        }
        // {
        //   transition: (
        //     <Transition.Together>
        //       <Transition.In
        //         type="slide-right"
        //         durationMs={500}
        //         interpolation="easeIn"
        //       />
        //       <Transition.Out type="slide-left" durationMs={500} />
        //     </Transition.Together>
        //   )
        // }
      ),
      Auth: SignInScreen
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;
