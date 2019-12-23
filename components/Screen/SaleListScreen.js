import React from 'react';
import {AsyncStorage, Button, StatusBar, View} from 'react-native';

export const SaleListScreen = props => {
  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View>
      <Button title="로그아웃" onPress={_signOutAsync} />
      <StatusBar barStyle="default" />
    </View>
  );
};

SaleListScreen.navigationOptions = {
  title: '판매중',
};
