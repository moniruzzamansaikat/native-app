import React from 'react'
import { Input, Card, Button, Text } from '@rneui/themed'
import { StyleSheet } from 'react-native';

function Register({ setState }) {
  return (
    <Card style={styles.card}>
      <Card.Title >Register</Card.Title>
      <Card.Divider></Card.Divider>

      <Input placeholder='Enter your name' />
      <Input placeholder='Enter your email' />
      <Input placeholder='Enter your password' />
      <Button>Register</Button>
      <Text style={styles.text}>or</Text>
      <Button onPress={() => setState('login')}>Login</Button>
    </Card >

  )
}

export default Register

const styles = StyleSheet.create({
  heading: {
  },

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
