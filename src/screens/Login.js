import React, { useState } from 'react'
import { SafeAreaView, Image , View, StyleSheet, StatusBar } from 'react-native'
import { Button, Input, Item, Text } from 'native-base'
import logo from '../assets/img/chatLogo.png'

export default function Login({setUserName}) {
  const [name, setName] = useState('')

  const onSubmit = () => {
    setUserName(name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View >
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
      </View>
      <Item>
        <Input 
          placeholder="Usuario"
          placeholderTextColor = "grey"
          style={{color: "#fff"}}
          onChangeText={e => setName(e)}
          value={name}
        />
      </Item>
      <Button style={styles.btn} onPress={onSubmit}>
        <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  logo: {
    width: "100%",
    height: 200,
    marginBottom: 30
  },
  btn: {
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#0098d3',
    width: "100%"
  }
})
