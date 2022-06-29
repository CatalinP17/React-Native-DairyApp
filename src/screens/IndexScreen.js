import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Button } from 'react-native'
import ListItem from '../components/ListItem'
import NavigationButton from '../components/NavigationButton'

const IndexScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationButton screenName='ScreenOne' navigation={navigation} />
      <NavigationButton screenName='ScreenTwo' navigation={navigation} />
      <Text style={styles.heading}>Flinstones and Rubbles</Text>
      <ScrollView horizontal={false}>
        <ListItem name='Fred' image={require('../../assets/fred.png')} />
        <ListItem name='Wilma' image={require('../../assets/wilma.png')} />
        <ListItem name='Pebbles' image={require('../../assets/Pebbles.png')} />
        <ListItem name='Barney' image={require('../../assets/barney.png')} />
        <ListItem name='Bettie' image={require('../../assets/Bettie.png')} />
        <ListItem name='Bam-Bam' image={require('../../assets/Bam-Bam.png')} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  nameText: {
    fontSize: 20,
    color: 'blue',
    marginTop: 10,
  },
  img: {
    width: 250,
    height: 250,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 5,
    marginVertical: 5,
  },
})

export default IndexScreen
