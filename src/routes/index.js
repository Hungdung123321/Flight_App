import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './utils/HomeNavigator'
import { NAVIGATOR } from './routes'
import { COLORS } from '../constants/colors'

const MainRoute = () => {

    const Drawer = createDrawerNavigator()

    return (
        <NavigationContainer >
            <Drawer.Navigator screenOptions={{ headerShown: true }}>
                <Drawer.Screen name={NAVIGATOR.HOME} component={HomeNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute