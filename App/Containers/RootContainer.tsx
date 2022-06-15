import React from 'react';
import {StatusBar} from 'react-native';

// Navigation
import ReduxNavigation from '../Navigation';

const RootContainer = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ReduxNavigation />
    </>
  );
};

export default RootContainer;
