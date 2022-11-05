import React from 'react'
import { Input, Card, Button, Text } from '@rneui/themed'
import { StyleSheet } from 'react-native';

function Login({ setState }) {
  return (
    <Card style={styles.card}>
      <Card.Title>Login</Card.Title>
      <Card.Divider></Card.Divider>

      <Input placeholder='Enter your name' />
      <Input placeholder='Enter your password' />
      <Button>Login</Button>
      <Text style={styles.text}>or</Text>
      <Button onPress={() => setState('register')}>Register</Button>
    </Card>

  )
}

export default Login

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
