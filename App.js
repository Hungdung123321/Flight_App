import React from 'react'
import MainRoute from './src/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { StyledView } from './src/components/ReactCores/ReactCoreStyled'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StyledView className='flex-1'>
          <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
          <MainRoute />
        </StyledView>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App