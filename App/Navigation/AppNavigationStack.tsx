import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {SignUpScreen, SignInScreen, VerifyScreen} from '../Containers/Auth';
import {CategoryScreen} from '../Containers/CategoryScreen';

// Type
import {AuthStackType, MainStackType} from './Type/AppNavigationType';

// ----------------------- MAIN -----------------------

const MainStack = createStackNavigator<MainStackType>();
const AuthStack = createStackNavigator<AuthStackType>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: 0.5,
      }}
      initialRouteName="Auth">
      <MainStack.Screen name={'Auth'} component={AuthNavigator} />
      <MainStack.Screen name={'CategoryScreen'} component={CategoryScreen} />
    </MainStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: 0.5,
      }}
      initialRouteName="SignInScreen">
      <AuthStack.Screen name={'SignInScreen'} component={SignInScreen} />
      <AuthStack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <AuthStack.Screen name={'VerifyScreen'} component={VerifyScreen} />
    </AuthStack.Navigator>
  );
};

export {MainNavigator, AuthNavigator};
