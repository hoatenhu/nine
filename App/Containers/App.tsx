import React from 'react';
import {HomeScreen} from './HomeScreen';
import {ConfirmScreen} from './ConfirmScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

// Redux
import store from '../Redux';

import RootContainer from './RootContainer';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      {/* <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      /> */}
      <RootContainer />
    </Provider>
  );
};

export default App;
