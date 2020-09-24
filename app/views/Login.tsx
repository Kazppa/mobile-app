import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

declare const global: {HermesInternal: null | {}};

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
        <Text style={styles.input_text}>Authentification</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="Connexion" onPress={this.onLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  input_text: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
