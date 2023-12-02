import React from 'react'
import { StyledScrollView, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { FlightResult } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAME } from '../../routes/routes'


const SearchResult = () => {

    const navigation = useNavigation()

    return (
        <StyledScrollView className='pt-2 px-1.5'>
            <FlightResult
                flightCode={'IN 230'}
                time={'01 hr 40min'}
                from={'DEL (Delhi)'}
                fromTime={'5.50'}
                to={'CCU (Kolkata)'}
                toTime={'7.30'}
                Class={'Business Class'}
                price={'$230'}
                className={'my-1'}
                onCheck={() => navigation.navigate(SCREEN_NAME.FLIGHT_DETAIL)}
            />
            <FlightResult
                flightCode={'IN 230'}
                time={'01 hr 40min'}
                from={'DEL (Delhi)'}
                fromTime={'5.50'}
                to={'CCU (Kolkata)'}
                toTime={'7.30'}
                Class={'Business Class'}
                price={'$230'}
                className={'my-1'}
            />
            <FlightResult
                flightCode={'IN 230'}
                time={'01 hr 40min'}
                from={'DEL (Delhi)'}
                fromTime={'5.50'}
                to={'CCU (Kolkata)'}
                toTime={'7.30'}
                Class={'Business Class'}
                price={'$230'}
                className={'my-1'}
            />
            <FlightResult
                flightCode={'IN 230'}
                time={'01 hr 40min'}
                from={'DEL (Delhi)'}
                fromTime={'5.50'}
                to={'CCU (Kolkata)'}
                toTime={'7.30'}
                Class={'Business Class'}
                price={'$230'}
                className={'my-1'}
            />
            <StyledView className='py-1' />
        </StyledScrollView>
    )
}

export default SearchResult