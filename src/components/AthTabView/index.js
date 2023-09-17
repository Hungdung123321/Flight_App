import React, { useState } from 'react'
import { TabView } from 'react-native-tab-view';
import { AUTH_FORM_ROUTES_TAB_VIEW, AUTH_FORM_TAB_VIEW_KEY } from '../../constants/dummydata';
import { InterTextWeight600, StyledView } from '../ReactCores/ReactCoreStyled';
import { Dimensions } from 'react-native';
import AuthTabBar from '../AuthTabBar';

const renderScene = ({ route }) => {
    switch (route.key) {
        case AUTH_FORM_TAB_VIEW_KEY.EMAIL:
            return <StyledView className=''><InterTextWeight600>helo1</InterTextWeight600></StyledView>;
        case AUTH_FORM_TAB_VIEW_KEY.PHONE_NUMBER:
            return <StyledView ><InterTextWeight600>helo2</InterTextWeight600></StyledView>;
    }
};



const AthTabView = ({ Routes = [], ...restTabview }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState(AUTH_FORM_ROUTES_TAB_VIEW)

    const renderTabBar = (props) => {
        const { index, routes } = props.navigationState;

        return (
            <StyledView className='flex-row mb-1.5'>
                {
                    routes.map((route, i) => <AuthTabBar
                        labelText={route.title}
                        onPress={() => setIndex(i)}
                        classNameTextTabBar={`${index === i ? '!text-o' : ''}`}
                        classNameWidthTabBar={`${index === i ? 'opacity-100' : ''}`}
                    />
                    )
                }
            </StyledView>
        )
    }

    return (
        <TabView
            initialLayout={{ width: Dimensions.get('window').width }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            swipeEnabled={false}
            {...restTabview}
        />
    )
}

export default AthTabView