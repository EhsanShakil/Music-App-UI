import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import Tab3 from '../screens/Tab3';
import {
  sharpEndHeart,
  appBarSecondIcon,
  appBarThirdIcon,
} from '../../theme/theme';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const StackNavigator = createBottomTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        tabBarIcon: () => (
          <Image source={sharpEndHeart} style={{height: 30, width: 30}} />
        ),
        // tabBarOptions: {
        //   activeTintColor: '#fcb549',
        //   showLabel: false,
        //   style: {
        //     height: 70,
        //     paddingBottom: 30,
        //     borderTopColor: 'white',
        //     backgroundColor: 'red',
        //   },
        // },
      },
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Image
            color="green"
            source={appBarSecondIcon}
            style={{height: 30, width: 30}}
          />
        ),
        // tabBarOptions: {
        //   activeTintColor: '#fcb549',
        //   showLabel: false,
        //   style: {
        //     height: 70,
        //     paddingBottom: 30,
        //     borderTopColor: 'white',
        //     backgroundColor: 'red',
        //   },
        // },
      },
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        tabBarIcon: (
          <Image source={appBarThirdIcon} style={{height: 30, width: 30}} />
        ),
        // tabBarOptions: {
        //   activeTintColor: '#fcb549',
        //   showLabel: false,
        //   style: {
        //     height: 70,
        //     paddingBottom: 30,
        //     borderTopColor: 'white',
        //     backgroundColor: 'red',
        //   },
        // },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fcb549',
      showLabel: false,
      style: {
        height: 70,
        paddingBottom: 30,
        backgroundColor: 'rgba(86,57,114,255)',
        borderTopColor: 'rgba(86,57,114,255)',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
      },
    },
  },
);

// const style = StyleSheet.create({
//   image: {
//     width: 100,
//     height: 100,
//   },
// });
export default Route = createAppContainer(StackNavigator);
