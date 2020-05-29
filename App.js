import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    Chat: ChatScreen,
  }),
);

const App = () => {
  return <AppContainer />;
};

export default App;
