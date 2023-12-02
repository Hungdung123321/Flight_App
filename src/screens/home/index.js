import React from 'react'
import { InterTextWeight600, StyledScrollView, StyledView, TextButton } from '../../components/ReactCores/ReactCoreStyled'
import { CardOffer, WaySelectionTabView } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR, SCREEN_NAME } from '../../routes/routes'
import { useSelector } from 'react-redux'
import moment from 'moment'


const Home = () => {

    const navigation = useNavigation()
    const startDate = useSelector((state) => state.Date.startDate)
    const endDate = useSelector((state) => state.Date.endDate)

    const onDeparture = () => {
        navigation.navigate(SCREEN_NAME.SELECT_DATE)
    }

    const onReturn = () => {
        navigation.navigate(SCREEN_NAME.SELECT_DATE)
    }

    const onSearch = () => {
        navigation.navigate(NAVIGATOR.HOME)
    }

    return (
        <StyledScrollView className='flex-1 pt-2 pb-2 px-1.5 bg-Lotion'>
            <WaySelectionTabView
                onDeparture={onDeparture}
                onReturn={onReturn}
                onSearch={onSearch}
                DepartureDate={moment(startDate).format('DD-MM-YYYY')}
                ReturnDate={endDate ? moment(endDate).format('DD-MM-YYYY') : null}
            />
            <StyledView className='h-12 mt-1.5 pt-1.5 border-t border-t-Spanish-Gray'>
                <StyledView StyledView className='flex-row justify-between items-center' >
                    <InterTextWeight600 className='text-lg text-black'>Hot offer</InterTextWeight600>
                    <TextButton textStyle={'text-o'}>See all</TextButton>
                </StyledView >
                <CardOffer />
            </StyledView >
            <StyledView className='h-3' />
        </StyledScrollView >
    )
}

export default Home