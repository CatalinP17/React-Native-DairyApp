import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState, useContext, useEffect, useReducer } from 'react'
import ItemContext from '../contexts/ItemContext'

const AddItemScreen = ({ navigation, route }) => {
  const { create } = useContext(ItemContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <View>
      <Text style={styles.textLabel}>Enter the book title:</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Type title here'
        value={title}
        onChangeText={(text) => {
          setTitle(text)
        }}
      />
      <Text style={styles.textLabel}>Pages Read:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder='Type content here'
        value={content}
        onChangeText={(text) => {
          setContent(text)
        }}
      />
      <Button
        style={styles.submitButton}
        title='Submit Item'
        onPress={() => {
          create(title, content, () => navigation.pop())
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderWidth: 1,
  },
  textLabel: {
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
})

export default AddItemScreen
