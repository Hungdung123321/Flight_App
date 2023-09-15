import React from 'react'
import MainRoute from './src/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { StyledView } from './src/components/ReactCores/ReactCoreStyled'


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StyledView className='flex-1 bg-black'>
        <StatusBar translucent />
        <MainRoute />
      </StyledView>
    </GestureHandlerRootView>
  )
}

export default App