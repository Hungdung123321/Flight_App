import React from 'react'
import { ButtonBig, InterTextWeight400, InterTextWeight500, InterTextWeight600, InterTextWeight700, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { IMG_AirPlaneFlight, IMG_FlightLogoSmall } from '../../assets'
import { FLIGHT_SELECTION_TYPE, STYLE_BUTTON } from '../../constants/common'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAME } from '../../routes/routes'
import { useSelector } from 'react-redux'
import FlightSelection from '../../components/FlightSelection'
import moment from 'moment'

const FlightDetail = () => {

    const navigation = useNavigation();
    const startDate = useSelector((state) => state.Date.startDate)

    return (
        <StyledView className='pt-2 px-1.5'>
            <StyledView className='w-full bg-white rounded-lg p-1'>
                <StyledView className='self-center pb-1'>
                    <IMG_FlightLogoSmall />
                </StyledView>
                <StyledView className='flex-row justify-between items-center pb-0.5 pt-1.5 border-t-0.5 border-t-Spanish-Gray/30'>
                    <StyledView className='items-start'>
                        <InterTextWeight700 className='text-black text-2xl'>5.50</InterTextWeight700>
                        <InterTextWeight500 className='text-black text-base'>DEL</InterTextWeight500>
                    </StyledView>
                    <IMG_AirPlaneFlight />
                    <StyledView className='items-end'>
                        <InterTextWeight700 className='text-black text-2xl'>7.30</InterTextWeight700>
                        <InterTextWeight500 className='text-black text-base'>CCU</InterTextWeight500>
                    </StyledView>
                </StyledView>
                <StyledView className='flex-row justify-between items-center py-1.5 border-b-0.5 border-b-Spanish-Gray/30'>
                    <InterTextWeight400 className='text-gray text-xs w-7 text-left'>Indira Gandhi International Airport</InterTextWeight400>
                    <InterTextWeight400 className='text-gray text-xs w-7 text-right'>Subhash Chandra Bose International Airport</InterTextWeight400>
                </StyledView>
                <StyledView className='flex-row justify-between items-center pb-1.5 border-b-0.5 border-b-Spanish-Gray/30'>
                    <FlightSelection
                        className={'mt-1.5 w-9'}
                        selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                        label={'Date'}
                        textcontent={moment(startDate).format('DD-MM-YYYY')}
                    />
                    <FlightSelection
                        className={'mt-1.5 w-9'}
                        selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                        label={'Time'}
                        textcontent={'09:30'}
                    />
                </StyledView>
                <StyledView className='py-1.5 flex-row justify-center'>
                    <InterTextWeight400 className='text-2xl text-gray mr-0.5'>Price</InterTextWeight400>
                    <InterTextWeight600 className='text-3xl'>$230</InterTextWeight600>
                </StyledView>
            </StyledView>
            <StyledView className='flex-row justify-between items-center mt-1.5'>
                <ButtonBig styleType={STYLE_BUTTON.INACTIVE} text={'Cancel'} classNameButton={'w-9'} />
                <ButtonBig onPress={() => navigation.navigate(SCREEN_NAME.CHOSE_SEAT)} text={'Confirm'} classNameButton={'w-9'} />
            </StyledView>
        </StyledView>
    )
}

export default FlightDetail

