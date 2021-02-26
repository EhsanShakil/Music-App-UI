import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {background4} from '../../theme/theme';

const Wrapper = (props) => {
  return (
    <ImageBackground style={style.image} source={background4}>
      {props.children}
    </ImageBackground>
  );
};

export default Wrapper;
const style = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: 'rgba(39,21,61,255)',
  },
});
