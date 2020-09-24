import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import R from 'res/R';
import Logo from '../components/Logo';
import Button from '../components/Button';

interface LoginProps {
  login: () => void;
}

export default class Login extends React.Component<LoginProps> {
  componentDidMount() {}

  onLogin = () => {
    this.props.login();
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo size={100} />
        <Text style={styles.text}>{R.i18n.t('login.welcome')}</Text>
        <Button title={R.i18n.t('login.button')} onPress={this.onLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.blue,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color: 'white',
  },
  input_text: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    color: 'white',
    marginBottom: 10,
  },
});
