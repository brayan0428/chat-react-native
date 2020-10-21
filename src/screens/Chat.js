import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import firebase from '../utils/firebase'
import 'firebase/database'
import moment from 'moment'
import { Body, Header, Title } from 'native-base'
import Message from '../components/Message'

export default function Chat({userName}) {
  const chatScrollRef = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const chat = firebase.database().ref('general')
    chat.on('value', snapshot => {
      setMessages(Object.values(snapshot.val()))
    })
  }, [])

  useEffect(() => {
    chatScrollRef.current.scrollTo({y:1000000})
  }, [messages])

  const sendMessage = message => {
    const time = moment().format('hh:mm a')
    firebase.database().ref("general").push({
      userName,
      message,
      time 
    })
  }

  return (
    <>
      <Header style={styles.header}>
        <Body>
          <Title style={{color: "#fff"}}>Chat App</Title>
        </Body>
      </Header>
      <View style={styles.container}>
        <ScrollView ref={chatScrollRef}>
          {
            messages.map((message, index) => (
              <Message key={index} {...message} currentUser={userName}/>
            ))
          }
        </ScrollView>
        <Input sendMessage={sendMessage}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#16202b"
  },  
  container: {
    flex:1,
    justifyContent: "space-between"
  }
})
