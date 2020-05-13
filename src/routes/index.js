import 'react-native-gesture-handler';
import * as React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import HomeStack from './HomeStack';

const AppRouter = (props) => {
  return (
    <SafeAreaView style = {{flex:1}}>
      <HomeStack />
    </SafeAreaView>
  );
};

export default AppRouter;
