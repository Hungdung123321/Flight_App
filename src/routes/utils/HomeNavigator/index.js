import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_NAME } from '../../routes'
import { ChoseSeat, FlightDetail, Home, PayMent, SearchResult, SelectDate } from '../../../screens'

const HomeNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={SCREEN_NAME.SEARCH_RESULT}
        >
            <Stack.Screen name={SCREEN_NAME.SEARCH_RESULT} component={SearchResult} options={{
                headerShown: true,
                title: 'Search Result',
                headerRight: null,
            }} />
            <Stack.Screen name={SCREEN_NAME.FLIGHT_DETAIL} component={FlightDetail} options={{
                headerShown: true,
                title: 'Flight Detail',
                headerRight: null,
            }} />
            <Stack.Screen name={SCREEN_NAME.CHOSE_SEAT} component={ChoseSeat} options={{
                headerShown: true,
                title: 'Chose Seat',
                headerRight: null,
            }} />
            <Stack.Screen name={SCREEN_NAME.PAY_MENT} component={PayMent} options={{
                headerShown: true,
                title: 'Pay Ment',
                headerRight: null,
            }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator