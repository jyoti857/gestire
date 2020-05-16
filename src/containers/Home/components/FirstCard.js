/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {cardStsyle} from '../../../config/globalStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const FirstCard = (props) => {
  return (
    <Card style={cardStsyle} elevation={4}>
      <Card.Title title="Your next available slot" />
      <Card.Content>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <FontAwesome name="truck" size={30} />
          <Text style={styles.textStyle}>STANDARD: Today 12:00PM - 2.00PM</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
  },
});

export default FirstCard;
