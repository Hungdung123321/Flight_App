import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BOTTOMTABS_HOME, NAVIGATOR, SCREEN_NAME } from './routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenticationNavigator from './utils/AuthenticationNavigator'
import HomeBottomTabs from './utils/HomeBottomTabs'
import HomeNavigator from './utils/HomeNavigator'
import { SelectDate } from '../screens'

const MainRoute = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NAVIGATOR.AUTH} component={AuthenticationNavigator} />
                <Stack.Screen name={BOTTOMTABS_HOME} component={HomeBottomTabs} />
                <Stack.Screen name={NAVIGATOR.HOME} component={HomeNavigator} />
                <Stack.Screen name={SCREEN_NAME.SELECT_DATE} component={SelectDate} options={() => ({
                    headerShown: true,
                    title: 'Departure Date',
                    headerRight: null,
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute