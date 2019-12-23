import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  SignInScreen,
  HomeScreen,
  BuySearchScreen,
  SaleSearchScreen,
  BuyListScreen,
  SaleListScreen,
  AuthLoadingScreen,
} from './components/Screen';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {AsyncStorage} from 'react-native';

const link = new createHttpLink({uri: 'http://192.168.0.27:4000/'});
const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('userToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: createStackNavigator({
        Home: HomeScreen,
        BuySearch: BuySearchScreen,
        SaleSearch: SaleSearchScreen,
        BuyList: BuyListScreen,
        SaleList: SaleListScreen,
      }),
      Auth: createStackNavigator({Auth: SignInScreen}),
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;
