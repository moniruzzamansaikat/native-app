import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { Card } from '@rneui/base';
import Login from './compo/Login';
import Register from './compo/Register';

import { useState } from 'react';

export default function App() {
  const [state, setState] = useState('register');

  return (
    <View style={styles.container}>
      {state === 'login' ? <Login setState={setState} /> : <Register setState={setState} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
