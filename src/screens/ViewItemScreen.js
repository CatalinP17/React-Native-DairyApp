import React, { useContext, useEffect, useReducer } from 'react'
import { View, StyleSheet, FlatList, Text, Button } from 'react-native'
import ItemContext from '../contexts/ItemContext'

const ViewItemScreen = ({ navigation, route }) => {
  const { state, remove } = useContext(ItemContext)
  const { name, id, title, content, date } = route.params

  return (
    <View style={styles.ViewItemScreen}>
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>ID: {id}</Text>
        <Text style={styles.titleText}>TITLE: {title}</Text>
        <Text style={styles.titleText}>PAGES READ: {content}</Text>
        <Text style={styles.titleText}>
          DATE: {new Date(date).toLocaleDateString()}
        </Text>
      </View>
      <Button
        title='Edit Item'
        onPress={() => {
          navigation.navigate('Edit', { id, id })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 130,
    width: 300,
    elevation: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  ViewItemScreenContainer: {
    backgroundColor: '#fafafa',
  },
  titleText: {
    fontSize: 14,
    fontWeight: '300',
    paddingLeft: 15,
    flex: 1,
    alignSelf: 'flex-start',
  },
})

export default ViewItemScreen
