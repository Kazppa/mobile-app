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

import Login from './src/views/Login';
import Home from './src/views/Home';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './src/views/Loading';

declare const global: {HermesInternal: null | {}};

export default class App extends React.Component {
  state = {
    user: null,
    isConnected: null,
  };

  async componentDidMount() {
    const isConnected: boolean =
      (await AsyncStorage.getItem('@connected')) === '1';
    this.setState({isConnected});
  }

  loginUser = () => {
    AsyncStorage.setItem('@connected', '1');
    this.setState({isConnected: true});
  };

  logoutUser = () => {
    AsyncStorage.setItem('@connected', '0');
    this.setState({isConnected: false});
  };

  render() {
    if (this.state.isConnected == null) {
      return <Loading />;
    } else if (this.state.isConnected) {
      return <Home logout={this.logoutUser} />;
    } else {
      return <Login login={this.loginUser} />;
    }
  }
}
