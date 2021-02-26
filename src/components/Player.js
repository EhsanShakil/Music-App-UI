import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {shuffleIcon, barIcon, playIcon, circle} from '../../theme/theme';

const Player = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image source={shuffleIcon} style={style.image} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground source={circle} style={style.background}>
          <Image source={playIcon} style={style.image1} />
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={barIcon} style={style.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Player;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
  image1: {
    width: 20,
    height: 30,
    top: 50,
    left: 55,
  },
  background: {
    width: 130,
    height: 130,
  },
});
