import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PixelRatio,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  Animated,
  Easing,
  Button,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Styles/WeatherHomeStyles';
import icons from '../../Themes/Image';

import AmountActions from '../../Redux/AmountRedux';

import {getCurrentLocation} from '../../Functions/LocationFunction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RootState} from '../../Types/RootState';
import {usePrevious} from '../../Hooks';

const spinValue = new Animated.Value(0);
const defaultPosition = {
  lat: -20.98848161007417,
  lng: 55.29550896863393,
};

const HomeScreen = () => {
  return <View>
    <Text>hello</Text>
  </View>
};

export default HomeScreen;
