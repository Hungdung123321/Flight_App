import React, { useState } from 'react'
import { TabView } from 'react-native-tab-view';
import { StyledView, TextButton } from '../ReactCores/ReactCoreStyled';
import { WAY_SELECTION_TABVIEW_KEY, WAY_SELECTION_TABVIEW_ROUTES } from '../../constants/date';
import { useDispatch } from 'react-redux';
import { setWaySlectionType } from '../../redux/SelectDateSlice';
import WaySelectionRound from '../WaySelectionRound';
import WaySelectionOneWay from '../WaySelectionOneWay';
import styles from './style';

const WaySelectionTabView = (props) => {

    const {
        onDeparture,
        onReturn,
        onSearch,
        DepartureDate,
        ReturnDate,
        ...restTabview
    } = props

    const [index, setIndex] = useState(0);
    const [routes] = useState(WAY_SELECTION_TABVIEW_ROUTES)
    const dispatch = useDispatch();

    const onTabBar = (route, i) => {
        setIndex(i)
        dispatch(setWaySlectionType(route))
    }

    const renderTabBar = (props) => {
        const { index, routes } = props.navigationState;

        return (
            <StyledView className='w-full h-2.5 flex-row mb-1.5 bg-white rounded-full'>
                {
                    routes.map((route, i) => <TextButton
                        key={`${i}`}
                        children={route.title}
                        onPress={() => onTabBar(route, i)}
                        buttonStyle={`flex-1 rounded-full ${index === i ? 'bg-o ' : 'bg-transparent'}`}
                        textStyle={`m-auto text-base ${index === i ? 'text-white ' : 'text-Spanish-Gray'}`}
                    />
                    )
                }
            </StyledView>
        )
    }

    const renderScene = ({ route }) => {
        switch (route.key) {
            case WAY_SELECTION_TABVIEW_KEY.ONE_WAY:
                return <WaySelectionOneWay
                    onDeparture={onDeparture}
                    onSearch={onSearch}
                    DepartureDate={DepartureDate}
                />
            case WAY_SELECTION_TABVIEW_KEY.ROUND:
                return <WaySelectionRound
                    onDeparture={onDeparture}
                    onReturn={onReturn}
                    onSearch={onSearch}
                    DepartureDate={DepartureDate}
                    ReturnDate={ReturnDate}
                />
            case WAY_SELECTION_TABVIEW_KEY.MULTICITY:
                return <WaySelectionOneWay />
        }
    };

    return (
        <TabView
            initialLayout={styles.initialLayout}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            swipeEnabled={false}
            style={styles.tabviewStyle}
            sceneContainerStyle={styles.sceneContainerStyle}
            {...restTabview}
        />
    )
}

export default WaySelectionTabView