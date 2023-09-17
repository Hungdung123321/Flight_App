import React, { useState } from 'react'
import { TabView } from 'react-native-tab-view';

const AppTabView = ({ renderScene, Routes = [] }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState(Routes)

    return (
        <TabView
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

export default AppTabView