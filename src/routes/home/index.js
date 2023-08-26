import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DRAWER_NAME } from '../routes';
import ReviewNavigator from '../utils/ReviewNavigator';
import TabNavigator from '../utils/TabNavigator';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={DRAWER_NAME.TAB_NAVIGATOR_DRAWER} component={TabNavigator} />
            <Drawer.Screen name={DRAWER_NAME.REVIEW_DRAWER} component={ReviewNavigator} />
        </Drawer.Navigator>
    )
}

export default MainDrawer