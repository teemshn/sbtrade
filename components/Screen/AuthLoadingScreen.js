import React from 'react';
import {AsyncStorage, ActivityIndicator, StatusBar, View} from 'react-native';

export const AuthLoadingScreen = props => {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  _bootstrapAsync();

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};
