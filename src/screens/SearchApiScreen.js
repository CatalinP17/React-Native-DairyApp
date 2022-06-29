import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSearchResults from '../hooks/useSearchResults'

const SearchApiScreen = ({ navigation }) => {
  const [getSearchResults, results, errorMessage] = useSearchResults([])
  const [searchTerms, setSearchTerms] = useState('books')
  useEffect(() => {
    getSearchResults(searchTerms)
  }, [])
  return (
    <View>
      <Text style={styles.textError}>
        {errorMessage !== '' ? errorMessage : null}
      </Text>
      <Text style={styles.textLabel}>Enter a Search Term:</Text>
      <TextInput style={styles.textInput} />
      <Button title='Search' />
      <FlatList
        data={results.businesses}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SearchApiItem', { id: item.id })
              }}
            >
              <Text style={styles.textLabel}>{item.name}</Text>
            </TouchableOpacity>
          )
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
  textError: {
    fontSize: 20,
    color: 'red',
  },
})

export default SearchApiScreen
