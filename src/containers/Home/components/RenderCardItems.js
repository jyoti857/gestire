/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';

const width = Dimensions.get('window').width;
const RenderCardItems = (props) => {
  const {data} = props;
  return (
    <View>
      <Card.Cover
        source={data}
        style={{borderRadius: 20, width, height: 170}}
      />
    </View>
  );
};

export default RenderCardItems;
