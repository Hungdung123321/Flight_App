import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NAVIGATOR, SCREEN_NAME } from "../../routes"
import { Onboarding } from "../../../screens"

const AuthenticationNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator key={NAVIGATOR.AUTH} initialRouteName={SCREEN_NAME.ONBOARDING} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_NAME.ONBOARDING} component={Onboarding} />
        </Stack.Navigator>
    )
}

export default AuthenticationNavigator



