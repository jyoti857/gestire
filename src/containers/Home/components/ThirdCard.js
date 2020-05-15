/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyeSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {cardStsyle} from '../../../config/globalStyles';

const ThirdCard = (props) => {
  const {nature} = props;
  return (
    <Card
      style={[cardStsyle, {height: 270, marginTop: 56, borderRadius: 20}]}
      elevation={1}>
      <Card.Cover source={nature} style={{borderRadius: 20}} />
    </Card>
  );
};

export default ThirdCard;
