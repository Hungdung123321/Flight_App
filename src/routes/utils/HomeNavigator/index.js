import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NAVIGATOR, SCREEN_NAME } from "../../routes"
import { Home } from "../../../screens"
import { COLORS } from "../../../constants/colors"

const HomeNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator key={NAVIGATOR.HOME} initialRouteName={SCREEN_NAME.HOME} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: COLORS.BLACK } }}>
            <Stack.Screen name={SCREEN_NAME.HOME} component={Home} />
        </Stack.Navigator>
    )
}

export default HomeNavigator



