import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {rainbowIcon, roundEndHeart, info} from '../../theme/theme';
import Player from './Player';
import ListAccordion from './List';

const Card = () => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 1,
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16, left: 10}}>On Air Now</Text>
        <TouchableOpacity>
          <Image source={info} style={{width: 30, height: 30, left: 100}} />
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <Image source={rainbowIcon} style={style.rainbowImage} />
        <TouchableOpacity style={style.imageCover}>
          <Image source={roundEndHeart} style={style.Heartimage} />
        </TouchableOpacity>
        <View style={style.textContiner}>
          <Text style={style.heading1}>Amplified Radio</Text>
          <Text style={style.heading2}>Phatty Soleil</Text>
          <Text style={style.heading3}>00:30 - 05:00</Text>
          <View style={style.line}></View>
          <Text style={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <TouchableOpacity onPress={() => alert('Read More Alert')}>
              <Text
                style={{color: 'lightgrey', textDecorationLine: 'underline'}}>
                Read More
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <Player />
      <ListAccordion />
    </>
  );
};

export default Card;
const style = StyleSheet.create({
  container: {
    width: '85%',
    height: '45%',
    backgroundColor: 'rgba(86,57,114,255)',
    borderRadius: 15,
    position: 'relative',
    bottom: 30,
  },
  rainbowImage: {
    height: 100,
    width: 100,
    bottom: 50,
    left: 100,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 20,
  },
  imageCover: {
    width: '15%',
    height: '15%',
    alignSelf: 'flex-end',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,21,61,255)',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  Heartimage: {
    height: 35,
    width: 35,
  },
  textContiner: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
  },
  heading1: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  heading2: {
    color: 'lightgrey',
  },
  heading3: {
    color: 'lightgrey',
  },
  line: {
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 10,
  },
  text: {
    color: 'lightgrey',
    textAlign: 'center',
    padding: 10,
  },
});
