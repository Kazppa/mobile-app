/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import Login from './views/Login';
import Home from './views/home';

declare const global: {HermesInternal: null | {}};

export default class App extends React.Component {
  state = {
    isConnected: false,
  };

  loginUser = () => {
    this.setState({isConnected: true});
  };

  logoutUser = () => {
    this.setState({isConnected: false});
  };

  render() {
    if (this.state.isConnected) {
      return <Home logout={this.logoutUser} />;
    } else {
      return <Login login={this.loginUser} />;
    }
  }
}
