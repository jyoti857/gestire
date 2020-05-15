import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../../containers/Categories';
import BasketScreen from '../../containers/Basket';
import SearchScreen from '../../containers/Search';
import OffersScreen from '../../containers/Offers';
import HomeScreen from '../../containers/Home';
import HomeStack from '../HomeStack';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack}
          // options={{
            
          // }}
        />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Offers" component={OffersScreen} />
        <Tab.Screen name="Basket" component={BasketScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
