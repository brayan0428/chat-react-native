import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Item, Input as InputNB, Icon } from 'native-base'

export default function Input() {
  return (
    <View style={styles.container}>
      <Item style={styles.itemInput}>
        <InputNB 
          placeholder="Enviar mensaje..."
          style={styles.input}
        />
        <TouchableOpacity>
          <Icon name="home" type="FontAwesome" style={styles.iconSend}/>
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
