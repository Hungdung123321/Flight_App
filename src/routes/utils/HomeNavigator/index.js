import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeRoutes } from '../../routes'


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                HomeRoutes.map(({ name, screen_id, component, layout }) => {

                    const Component = component
                    const Layout = layout

                    return <Stack.Screen
                        name={name}
                        key={screen_id}
                    >
                        {
                            () => (<Component />)
                        }
                    </Stack.Screen>
                })
            }
        </Stack.Navigator>
    )
}

export default HomeNavigator