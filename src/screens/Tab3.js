import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {sharpEndHeart} from '../../theme/theme';

const Tab3 = () => {
  //   let sharpEndHeart = require('../../assets/Group13.png');
  return (
    <View style={style.container}>
      <Text style={style.text}>This is a Third Tab</Text>
      <Image source={sharpEndHeart} style={style.image} />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab3;
