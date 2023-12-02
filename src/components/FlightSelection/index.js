import React from 'react'
import { InterTextWeight400, InterTextWeight500, InterTextWeight600, StyledButton, StyledView } from '../ReactCores/ReactCoreStyled'
import { IC_Calender, IC_Depart, IC_Landing } from '../../assets'
import { FLIGHT_SELECTION_TYPE, SELECTION_TYPE } from '../../constants/common';

const FlightSelection = (props) => {

    const {
        label,
        textcontent,
        isDepart = true,
        selectionType = FLIGHT_SELECTION_TYPE.DEFAULT,
        ...resetBtn
    } = props;

    const renderContent = () => {
        switch (selectionType) {

            case FLIGHT_SELECTION_TYPE.DEFAULT:
                return <InterTextWeight500 className='text-sm'>
                    {textcontent}
                </InterTextWeight500>

            case FLIGHT_SELECTION_TYPE.FROM_TO:
                return <StyledView className='flex-row items-center'>
                    <StyledView className='self-center'>
                        {isDepart ? <IC_Depart /> : <IC_Landing />}
                    </StyledView>
                    <StyledView className='ml-0.5 flex-col'>
                        <StyledView className='flex-row items-end'>
                            <InterTextWeight600 className='text-base text-black mr-0.5 leading-5'>Delhi</InterTextWeight600>
                            <InterTextWeight400 className='text-xs text-gray leading-5'>DEL</InterTextWeight400>
                        </StyledView>
                        <InterTextWeight400 className='text-xs text-Spanish-Gray'>Indira Gandhi International Airport</InterTextWeight400>
                    </StyledView>
                </StyledView>

            case FLIGHT_SELECTION_TYPE.DEPARTURE_DAY:
                return <StyledView className='flex-row'>
                    <IC_Calender />
                    <InterTextWeight500 className='text-gray ml-1'>{textcontent || '+ Add Date'}</InterTextWeight500>
                </StyledView>
        }
    }

    return (
        <StyledButton className='w-full h-3.5 relative px-1 justify-center border border-Spanish-Gray rounded-lg' {...resetBtn}>
            <InterTextWeight400 className='text-xs text-gray absolute -top-0.625 left-0.5 px-0.5 bg-white'>{label || ''}</InterTextWeight400>
            {renderContent()}
        </StyledButton>
    )
}

export default FlightSelection