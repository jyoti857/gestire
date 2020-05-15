/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, FlatList, Dimensions, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {cardStsyle} from '../../../config/globalStyles';
import RenderCardItems from './RenderCardItems';

// opacity, animation, for dot view
import Animated, {Extrapolate} from 'react-native-reanimated';

const nature1 = require('gestire/src/assets/images/nature1.png');
const nature2 = require('gestire/src/assets/images/nature2.png');
const nature3 = require('gestire/src/assets/images/nature3.png');
const dataCards = [nature1, nature2, nature3];

const {width} = Dimensions.get('window');
let scrollX = new Animated.Value(0);
let position = new Animated.divide(scrollX, width);
const SecondCard = (props) => {
  let flatList = useRef('null');
  useEffect(() => {
    infiniteScroll();
  });
  const infiniteScroll = () => {
    const numberOfData = dataCards.length;
    let scrollValue = 0;
    let scrolled = 0;
    setInterval(() => {
      if (scrolled < numberOfData) {
        scrolled++;
        scrollValue += width;
      } else {
        scrollValue = 0;
        scrolled = 0;
      }
      flatList.current.scrollToOffset({animated: true, offset: scrollValue});
    }, 3000);
  };
  return (
    <Card
      style={[cardStsyle, {height: 170, marginTop: 12, borderRadius: 20}]}
      elevation={8}>
      <View style={styles.cardView}>
        <FlatList
          ref={flatList}
          data={dataCards}
          keyExtractor={(item, i) => 'key' + i}
          renderItem={({item}) => {
            return <RenderCardItems data={item} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          onScroll={() => {
            Animated.event([
              {
                nativeEvent: {contentOffset: {x: scrollX}},
              },
            ]);
          }}
        />
      </View>
      <View style={styles.dotView}>
        {dataCards.map((_, i) => {
          let opacity = Animated.interpolate(
            Animated.divide(scrollX, width),
            // scrollX,
            {
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: Extrapolate.CLAMP,
            },
          );
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#595959',
                margin: 8,
                borderRadius: 10,
              }}
            />
          );
        })}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flexDirection: 'row',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SecondCard;
