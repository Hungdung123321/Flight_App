import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Detail } from '../../../screens';
import HomeNavigator from '../HomeNavigator';
import { TABS_NAME } from '../../routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={TABS_NAME.HOME_NAVIGATOR} component={HomeNavigator} />
            <Tab.Screen name={TABS_NAME.DETAIL_NAVIGATOR} component={Detail} />
        </Tab.Navigator>
    );
}

export default TabNavigator