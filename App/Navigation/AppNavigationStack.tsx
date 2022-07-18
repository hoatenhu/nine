import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {SignUpScreen} from '../Containers/Auth/';
import {CategoryScreen} from '../Containers/CategoryScreen';

// Type
import {MainStackType} from './Type/AppNavigationType';

// ----------------------- MAIN -----------------------

const MainStack = createStackNavigator<MainStackType>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: 0.5,
      }}
      initialRouteName="SignUpScreen">
      <MainStack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <MainStack.Screen
        name={'CategoryScreen'}
        component={CategoryScreen}
      />
    </MainStack.Navigator>
  );
};

export {MainNavigator};
