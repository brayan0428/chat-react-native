import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'

export default function Chat() {
  return (
    <>
      <View style={styles.container}>
        <Text>Chat</Text>
        <Input />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "space-between"
  }
})
