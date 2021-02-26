import React, {useState} from 'react';
import {notification, circle, ellipse7} from '../../theme/theme';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

const List = () => {
  const [state, setState] = useState(false);
  const data = [
    {
      title: 'The Down liners Crypt',
      song: 'Surf & Garage Rock',
      ellipse7,
      circle,
      notification,
    },
    {
      title: 'The Down liners Crypt',
      song: 'Surf & Garage Rock',
      ellipse7,
      circle,
      notification,
    },
    {
      title: 'The Down liners Crypt',
      song: 'Surf & Garage Rock',
      ellipse7,
      circle,
      notification,
    },
    {
      title: 'The Down liners Crypt',
      song: 'Surf & Garage Rock',
      ellipse7,
      circle,
      notification,
    },
  ];
  return (
    <View style={style.container}>
      {state === false ? (
        <TouchableOpacity onPress={() => setState(!state)}>
          <Text
            style={{
              backgroundColor: 'rgba(86,57,114,0.9)',
              justifyContent: 'center',
              textAlign: 'center',
              height: 40,
              borderTopStartRadius: 10,
              borderTopEndRadius: 10,
              fontSize: 20,
              color: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            Upcoming Broadcast
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            backgroundColor: 'rgba(86,57,114,0.8)',
            justifyContent: 'center',
            height: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View style={{margin: 5}}>
            <TouchableOpacity onPress={() => setState(!state)}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                }}>
                Upcoming Broadcast
              </Text>
            </TouchableOpacity>
            {data.map((details, index) => (
              <View key={index} style={{flexDirection: 'column'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginVertical: 5,
                    height: 70,
                    borderRadius: 50,
                    backgroundColor: 'rgba(86,57,114,255)',
                  }}>
                  <TouchableOpacity>
                    <Image
                      source={details.ellipse7}
                      style={{width: 50, height: 50}}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={{color: 'white'}}>{details.title}</Text>
                    <Text style={{color: 'white', fontSize: 12}}>
                      {details.song}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <ImageBackground
                      source={details.circle}
                      style={{width: 70, height: 70}}>
                      <Image
                        source={details.notification}
                        style={{
                          width: 30,
                          height: 30,
                          top: 20,
                          left: 20,
                        }}
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        marginVertical: 2,
                      }}></View>
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        marginVertical: 2,
                      }}></View>
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        marginVertical: 2,
                      }}></View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default List;
const style = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'yellow',
    position: 'absolute',
    // backgroundColor: 'yellow',
    bottom: 0,
    // top: '85%',
    // height: '100%',
  },
  //   accordion: {
  //     backgroundColor: 'rgba(86,57,114,0.9)',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     height: 40,
  //     borderTopStartRadius: 10,
  //     borderTopEndRadius: 10,
  //   },
  text: {
    fontSize: 20,
    // justifyContent: 'flex-start',
  },
});
