import 'react-native-gesture-handler';
import * as React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import HomeStack from './HomeStack';
import BottomTab from './BottomTab';

const AppRouter = (props) => {
  return (
    <SafeAreaView style = {{flex:1}}>
      {/* <HomeStack /> */}
      <BottomTab />
    </SafeAreaView>
  );
};

export default AppRouter;
