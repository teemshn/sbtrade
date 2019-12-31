import React from 'react';
import {AsyncStorage, Button, View} from 'react-native';

export const HomeScreen = props => {
  const _showMoreApp = screenName => {
    props.navigation.navigate(screenName);
    console.log(screenName);
  };

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View>
      <Button title="구매" onPress={() => _showMoreApp('BuySearch')} />
      <Button title="판매" onPress={() => _showMoreApp('SaleSearch')} />
      <Button title="구매중" onPress={() => _showMoreApp('BuyList')} />
      <Button title="판매중" onPress={() => _showMoreApp('SaleList')} />
      <Button title="로그아웃" onPress={_signOutAsync} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: '홈',
};
