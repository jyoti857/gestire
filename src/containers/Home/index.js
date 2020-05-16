/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-paper';
import FirstCard from './components/FirstCard';
import SecondCard from './components/SecondCard';
import ThirdCard from './components/ThirdCard';
import FourthCard from './components/FourthCard';

const nature1 = require('gestire/src/assets/images/nature1.png');
const nature2 = require('gestire/src/assets/images/nature2.png');
const nature3 = require('gestire/src/assets/images/nature3.png');

const HomeScreen = (props) => {
  const [home, setHome] = useState('sl');
  return (
    <View style={{flex: 1, zIndex: 1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View>
        <FontAwesome
          name="search"
          size={18}
          color="black"
          style={{position: 'absolute', left: 40, top: 48, zIndex: 2}}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            height: 70,
            width: '96%',
            marginTop: 20,
            marginLeft: 20,
            borderRadius: 10,
            color: 'black',
            fontSize: 30,
            alignItems: 'center',
            paddingLeft: 60,
            position: 'relative',
          }}
          value={home}
          onChangeText={(newText) => setHome(newText)}
          placeholder="Seacrh 18000+ products"
        />
      </View>
      <FirstCard />
      <SecondCard />
      <ThirdCard nature={nature2} />
      <FourthCard nature={nature3} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: '96%',
    height: 90,
    marginHorizontal: 20,
    marginTop: 60,
    borderRadius: 10,
  },
  textStyle: {
    marginLeft: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
  },
});

export default HomeScreen;
