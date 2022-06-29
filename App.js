import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext, useEffect, useReducer } from 'react'
import { View, Text, Button } from 'react-native'
import AddItemScreen from './src/screens/AddItemScreen'
import ListViewScreen from './src/screens/ListViewScreen'
import ViewItemScreen from './src/screens/ViewItemScreen'
import { ItemProvider } from './src/contexts/ItemContext'
import EditItemScreen from './src/screens/EditItemScreen'
import CameraScreen from './src/screens/CameraScreen'
import CameraPhotoScreen from './src/screens/CameraPhotoScreen'
import SearchApiScreen from './src/screens/SearchApiScreen'
import SearchApiItemScreen from './src/screens/SearchIpiItemScreen'
import OnBoardScreen from './src/screens/OnBoardScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='OnBoardScreen'>
          <Stack.Screen
            name='OnBoardScreen'
            component={OnBoardScreen}
            options={{ title: '' }}
          />
          <Stack.Screen
            name='SearchApiItem'
            component={SearchApiItemScreen}
            options={{ title: 'Item for API' }}
          />
          <Stack.Screen
            name='SearchApi'
            component={SearchApiScreen}
            options={{ title: 'Search an API with HTTP' }}
          />
          <Stack.Screen
            name='Camera'
            component={CameraScreen}
            options={{ title: 'Take a picture' }}
          />
          <Stack.Screen
            name='Photo'
            component={CameraPhotoScreen}
            options={{ title: 'Your Picture' }}
          />
          <Stack.Screen
            name='View'
            component={ViewItemScreen}
            options={{ title: 'View item' }}
          />
          <Stack.Screen
            name='Edit'
            component={EditItemScreen}
            options={{ title: 'Edit an item' }}
          />
          <Stack.Screen
            name='List'
            component={ListViewScreen}
            options={{ title: 'View all items' }}
          />
          <Stack.Screen
            name='Add'
            component={AddItemScreen}
            options={{ title: 'Add a new item' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  )
}

export default App
