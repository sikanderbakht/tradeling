/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import AppNavigator from './src/navigation/appNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>

  );
}

export default App;
