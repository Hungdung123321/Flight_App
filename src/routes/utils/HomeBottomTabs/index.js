import { NAVIGATOR, SCREEN_NAME } from "../../routes"
import { Booking, Home, Inbox, Offer, Profile } from "../../../screens"
import { IC_Bookings, IC_Home, IC_Inbox, IC_Menu, IC_Offer, IC_Profile } from "../../../assets";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../../constants/colors"
import { ButtonIcon, InterTextWeight600 } from "../../../components/ReactCores/ReactCoreStyled";

const HomeBottomTabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            key={NAVIGATOR.HOME}
            initialRouteName={NAVIGATOR.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.WHITE,
                tabBarInactiveTintColor: COLORS.LIGHT_RED,
                tabBarStyle: {
                    backgroundColor: COLORS.ORIOLES_ORANGE,
                    height: 64,
                },
                tabBarItemStyle: {
                    paddingVertical: 8
                },
            }}
        >
            <Tab.Screen
                name={SCREEN_NAME.HOME}
                component={Home}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    title: 'Book Flight',
                    headerTitleAlign: "center",
                    headerRight: () => <ButtonIcon className={'mr-1.5'} Svg={<IC_Menu />} />,
                    tabBarLabel: ({ focused }) => <InterTextWeight600 className={`text-xs ${focused ? 'text-white' : 'text-light-red'}`}>{SCREEN_NAME.HOME}</InterTextWeight600>,
                    tabBarIcon: ({ color }) => <IC_Home fill={color} />,
                }}
            />
            <Tab.Screen
                name={SCREEN_NAME.BOOKING}
                component={Booking}
                options={{
                    tabBarIcon: ({ color }) => <IC_Bookings fill={color} />,
                    tabBarLabel: ({ focused }) => <InterTextWeight600 className={`text-xs ${focused ? 'text-white' : 'text-light-red'}`}>{SCREEN_NAME.BOOKING}</InterTextWeight600>
                }}
            />
            <Tab.Screen
                name={SCREEN_NAME.OFFER}
                component={Offer}
                options={{
                    tabBarIcon: ({ color }) => <IC_Offer fill={color} />,
                    tabBarLabel: ({ focused }) => <InterTextWeight600 className={`text-xs ${focused ? 'text-white' : 'text-light-red'}`}>{SCREEN_NAME.OFFER}</InterTextWeight600>
                }}
            />
            <Tab.Screen
                name={SCREEN_NAME.INBOX}
                component={Inbox}
                options={{
                    tabBarIcon: ({ color }) => <IC_Inbox fill={color} />,
                    tabBarLabel: ({ focused }) => <InterTextWeight600 className={`text-xs ${focused ? 'text-white' : 'text-light-red'}`}>{SCREEN_NAME.INBOX}</InterTextWeight600>
                }}
            />
            <Tab.Screen
                name={SCREEN_NAME.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => <IC_Profile fill={color} />,
                    tabBarLabel: ({ focused }) => <InterTextWeight600 className={`text-xs ${focused ? 'text-white' : 'text-light-red'}`}>{SCREEN_NAME.PROFILE}</InterTextWeight600>
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeBottomTabs



