import React, { useState } from 'react'
import { TabView } from 'react-native-tab-view';
import { AUTHFORM_TABVIEW_ROUTES, AUTHFORM_TABVIEW_KEY } from '../../constants/dummydata';
import { StyledView } from '../ReactCores/ReactCoreStyled';
import { Dimensions } from 'react-native';
import AuthTabBar from '../AuthTabBar';
import AuthEmailForm from '../AuthEmailForm';
import AuthPhonNumberForm from '../AuthPhonNumberForm';

const renderScene = ({ route }) => {
    switch (route.key) {
        case AUTHFORM_TABVIEW_KEY.EMAIL:
            return <AuthEmailForm />;
        case AUTHFORM_TABVIEW_KEY.PHONE_NUMBER:
            return <AuthPhonNumberForm />;
    }
};



const AthTabView = ({ Routes = [], ...restTabview }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState(AUTHFORM_TABVIEW_ROUTES)

    const renderTabBar = (props) => {
        const { index, routes } = props.navigationState;

        return (
            <StyledView className='flex-row mb-1.5'>
                {
                    routes.map((route, i) => <AuthTabBar
                        key={`${i}`}
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
            style={{ height: 260 }}
            {...restTabview}
        />
    )
}

export default AthTabView