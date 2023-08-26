import React from 'react'
import MainRoute from './src/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden />
      <MainRoute />
    </GestureHandlerRootView>
  )
}

export default App