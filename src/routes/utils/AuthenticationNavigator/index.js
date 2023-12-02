import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NAVIGATOR, SCREEN_NAME } from "../../routes"
import { Forgot, Login, Signup, VerifyAccount } from "../../../screens"

const AuthenticationNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator key={NAVIGATOR.AUTH} initialRouteName={SCREEN_NAME.ONBOARDING} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
            <Stack.Screen name={SCREEN_NAME.SIGNUP} component={Signup} />
            <Stack.Screen name={SCREEN_NAME.FORGOT} component={Forgot} />
            <Stack.Screen name={SCREEN_NAME.VERIFY} component={VerifyAccount} />
        </Stack.Navigator>
    )
}

export default AuthenticationNavigator



