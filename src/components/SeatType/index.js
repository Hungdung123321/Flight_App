import React from 'react'
import { InterTextWeight400, StyledView } from '../ReactCores/ReactCoreStyled'
import { SEAT_TYPE } from '../../constants/common'

const SeatType = ({
    type,
}) => {

    const renderContent = () => {
        switch (type) {
            case SEAT_TYPE.SELECTED:
                return <StyledView className='flex-row items-center'>
                    <StyledView className='w-1 h-1 rounded-full bg-o mr-0.5' />
                    <InterTextWeight400 className='text-gray text-sm'>Selected</InterTextWeight400>
                </StyledView>
            case SEAT_TYPE.EMPTY:
                return <StyledView className='flex-row items-center'>
                    <StyledView className='w-1 h-1 rounded-full bg-Light-Silver mr-0.5' />
                    <InterTextWeight400 className='text-gray text-sm'>Empty</InterTextWeight400>
                </StyledView>
            case SEAT_TYPE.RESERVED:
                return <StyledView className='flex-row items-center'>
                    <StyledView className='w-1 h-1 rounded-full bg-gray mr-0.5' />
                    <InterTextWeight400 className='text-gray text-sm'>Reserved</InterTextWeight400>
                </StyledView>
        }
    }

    return renderContent();
}

export default SeatType