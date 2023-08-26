import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DRAWER_NAME, ROUTES_NAME } from './routes'
import AuthRoute from './auth'
import MainDrawer from './home'

const MainRoute = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTES_NAME.AUTH_ROUTE} component={AuthRoute} />
                <Stack.Screen name={DRAWER_NAME.MAIN_DRAWER} component={MainDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute