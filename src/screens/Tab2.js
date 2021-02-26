import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';
import List from '../components/List';
import Player from '../components/Player';

const Tab2 = () => {
  return (
    <View style={style.container}>
      <Card />
    </View>
  );
};

export default Tab2;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
