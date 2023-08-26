import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthRoutes } from '../routes'


const Stack = createNativeStackNavigator()

const AuthRoute = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                AuthRoutes.map(({ name, screen_id, component }) => {

                    const Component = component

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

export default AuthRoute