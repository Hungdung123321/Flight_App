import React from 'react'
import { ButtonBig, InterTextWeight400, InterTextWeight500, InterTextWeight700, StyledView } from '../ReactCores/ReactCoreStyled'
import { IC_Chair, IC_FlightLogo, IMG_AirPlaneFlight } from '../../assets'

const FlightResult = ({
    from,
    to,
    flightCode,
    time,
    fromTime,
    toTime,
    Class,
    price,
    onCheck,
    ...rest
}) => {

    return (
        <StyledView className='w-full h-15.5 p-1 bg-white rounded-lg' {...rest}>
            <StyledView className='flex-row mb-0.5 justify-between items-center'>
                <StyledView className='flex-row items-center'>
                    <IC_FlightLogo />
                    <InterTextWeight500 className='ml-0.5 text-sm'>{flightCode}</InterTextWeight500>
                </StyledView>
                <InterTextWeight500 className='text-xs text-gray'>{time}</InterTextWeight500>
            </StyledView>
            <StyledView className='flex-row justify-between items-center'>
                <StyledView>
                    <InterTextWeight700 className='text-black text-base'>{fromTime}</InterTextWeight700>
                    <InterTextWeight500 className='text-gray text-xs'>{from}</InterTextWeight500>
                </StyledView>
                <IMG_AirPlaneFlight />
                <StyledView className='items-end'>
                    <InterTextWeight700 className='text-black text-base'>{toTime}</InterTextWeight700>
                    <InterTextWeight500 className='text-gray text-xs'>{to}</InterTextWeight500>
                </StyledView>
            </StyledView>
            <StyledView className='pt-2 mb-1 flex-row justify-between items-center '>
                <StyledView className='flex-row items-center'>
                    <IC_Chair />
                    <InterTextWeight400 className='ml-0.5 text-sm text-gray'>{Class}</InterTextWeight400>
                </StyledView>
                <StyledView className='flex-row items-center'>
                    <InterTextWeight400 className='mr-0.5 text-sm text-gray'>from</InterTextWeight400>
                    <InterTextWeight700 className='text-black text-base'>{price}</InterTextWeight700>
                </StyledView>
            </StyledView>
            <ButtonBig text={'check'} buttonStyle={'justify-end'} onPress={onCheck} />
        </StyledView>
    )
}

export default FlightResult