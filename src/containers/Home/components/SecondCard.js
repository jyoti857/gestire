/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {cardStsyle} from '../../../config/globalStyles';
import { FlatList } from 'react-native-gesture-handler';
import RenderCardItems from './RenderCardItems';



const nature1 = require('gestire/src/assets/images/nature1.png');
const nature2 = require('gestire/src/assets/images/nature2.png');
const nature3 = require('gestire/src/assets/images/nature3.png');
const dataCards = [nature1, nature2, nature3];
const SecondCard = (props) => {
  return (
    <Card
      style={[cardStsyle, {height: 170, marginTop: 12, borderRadius: 20}]}
      elevation={8}>
      <View style={styles.cardView}>
        <FlatList
          data={dataCards}
          keyExtractor={(item, i) => 'key' + i}
          renderItem={({item}) => {
            return <RenderCardItems data={item} />;
          }}
          horizontal
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardView:{
    flexDirection: 'row',
  }
});

export default SecondCard;
