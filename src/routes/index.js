import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NAVIGATOR } from './routes'
import AuthenticationNavigator from './utils/AuthenticationNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'

const MainRoute = () => {

    const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NAVIGATOR.AUTH} component={AuthenticationNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute