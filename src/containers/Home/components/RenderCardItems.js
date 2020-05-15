/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';

const height = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;
const RenderCardItems = (props) => {
  const {data} = props;
  
  return (
    <Card.Cover
      source={data}
      style={{borderRadius: 20, width, height: 170, marginRight: 20}}
    />
  );
};

export default RenderCardItems;
