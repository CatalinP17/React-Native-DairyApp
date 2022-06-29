import React, { useContext, useEffect, useReducer } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Button,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { actionTypes } from '../helpers/actionTypes'
import ItemContext from '../contexts/ItemContext'

const ListViewScreen = ({ navigation }) => {
  const { state, remove } = useContext(ItemContext)
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Add')}>
          <MaterialIcons name='add' size={24} color='black' />
        </Pressable>
      ),
    })
  }, [state])
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate('Camera')}>
          <MaterialIcons name='camera-alt' size={24} color='black' />
        </Pressable>
      ),
    })
  }, [state])
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(e) => e.id.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('View', {
                  id: item.id,
                  title: item.title,
                  content: item.content,
                  date: item.date.toUTCString(),
                })
              }}
            >
              <View style={styles.ListViewScreenContainer}>
                <View style={styles.itemContainer}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>
                      {item.date.toLocaleDateString()}
                    </Text>
                    <Text>{item.date.toLocaleDateString()}</Text>
                  </View>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Pressable
                    onPress={() => {
                      remove(item.id)
                    }}
                  >
                    <MaterialIcons name='delete' size={38} color='red' />
                  </Pressable>
                </View>
              </View>
            </Pressable>
          )
        }}
      />
      <Button
        title='Search for a book'
        onPress={() => navigation.navigate('SearchApi')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 20,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 15,
    padding: 15,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 15,
    flex: 1,
    alignSelf: 'flex-start',
  },
  ListViewScreenContainer: {
    backgroundColor: '#fafafa',
  },
})

export default ListViewScreen
