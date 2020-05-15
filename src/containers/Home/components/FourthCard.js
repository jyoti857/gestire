/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyeSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {cardStsyle} from '../../../config/globalStyles';

const FourthCard = (props) => {
  const {nature} = props;
  return (
    <Card style={[cardStsyle, {height: 310, marginTop: 48}]} elevation={1}>
      <Card.Cover source={nature} />
    </Card>
  );
};

export default FourthCard;
