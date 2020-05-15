/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {View} from 'react-native';
import HomeScreen from '../../containers/Home';
import Search from '../../components/Search';

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
              style={{backgroundColor: '#00e64d', width: '100%', height: 200,
            }}
            />
          ),
          headerLeft: () => (
            <FontAwesome5
              name="bars"
              size={30}
              color="#fff"
              style={{marginLeft: 40, marginTop: 10}}
            />
          ),
          headerRight: () => (
            <FontAwesome5
              name="user"
              size={30}
              color="#fff"
              light
              style={{marginRight: 40, marginTop: 10}}
            />
          ),
        }}
      />
    </Home.Navigator>
  );
};

export default HomeStack;
