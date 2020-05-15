/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-paper';


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
      <Card elevation={4} style={styles.cardStyle}>
        <Card.Title title="Your next available slot" />
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <FontAwesome name="truck" size={30} />
            <Text style={styles.textStyle}>
              STANDARD: Today 12:00PM - 2.00PM
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card
        style={[styles.cardStyle, {height: 170, marginTop: 12, borderRadius:20}]}
        elevation={8}
      >
        <Card.Cover source = {nature1} style = {{borderRadius: 20}} />
      </Card>
      <Card
        style={[styles.cardStyle, {height: 270, marginTop: 56, borderRadius: 20}]}
        elevation={1}
      >
        <Card.Cover source = {nature2} style = {{borderRadius: 20}}/>
      </Card>
      <Card
        style={[styles.cardStyle, {height: 310, marginTop: 48}]}
        elevation={1}
      >
        <Card.Cover source = {nature3}/>
      </Card>
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
