/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';

import {View} from 'react-native';
import HomeScreen from '../../containers/Home';

const Home = createStackNavigator();

const HomeStack = (props) => {
  return (
    <Home.Navigator initialRouteName="Home_jy">
      <Home.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'bigbasket',
          headerTitleStyle: {
            fontSize: 30,
            color: 'white',
            alignSelf: 'center',
          },

          headerBackground: () => (
            <View
              style={{backgroundColor: '#00e64d', width: '100%', height: 100}}
            />
          ),
        }}
      />
    </Home.Navigator>
  );
};

export default HomeStack;
