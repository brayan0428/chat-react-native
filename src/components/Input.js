import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Item, Input as InputNB, Icon } from 'native-base'

export default function Input({sendMessage}) {
  const [message, setMessage] = useState('')

  const onSubmit = () => {
    sendMessage(message)
    setMessage('')
  }

  return (
    <View style={styles.container}>
      <Item style={styles.itemInput}>
        <InputNB 
          placeholder="Enviar mensaje..."
          style={styles.input}
          value={message}
          onChangeText={e => setMessage(e)}
        />
        <TouchableOpacity onPress={onSubmit}>
          <Icon name="send" type="FontAwesome" style={styles.iconSend}/>
        </TouchableOpacity>
      </Item>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
  },
  itemInput: {
    borderColor: '#16202b',
  },
  input: {
    color: '#fff',
  },
  iconSend: {
    color: '#fff',
  },
})
