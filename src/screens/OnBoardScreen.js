import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
  Pressable,
} from 'react-native'

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent style={styles.statusBar} />
      <Image style={styles.image} source={require('../Images/avatar.jpeg')} />
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.title}>DiaryApp</Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Pressable onPress={() => navigation.navigate('List')}>
          <View style={styles.btn}>
            <Text style={{ color: 'white' }}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  statusBar: {
    backgroundColor: 'transparent',
  },
  secondContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thirdContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default OnBoardScreen
