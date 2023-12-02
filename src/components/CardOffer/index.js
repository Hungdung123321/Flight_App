import React from 'react'
import { InterTextWeight400, InterTextWeight500, StyledButton, StyledImage, StyledView } from '../ReactCores/ReactCoreStyled'
import { IC_Offer1 } from '../../assets'

const CardOffer = () => {
    return (
        <StyledButton className='w-18 h-7 mt-1 flex-row bg-white rounded-lg'>
            <StyledView className='w-6 h-full bg-Lavender rounded-l-lg'>
                <StyledImage className='w-5.125 h-5.125 m-auto' source={IC_Offer1} />
            </StyledView>
            <StyledView className='w-12 flex-col m-auto pl-1'>
                <InterTextWeight500 className='text-base text-black'>15% discount with mastercard</InterTextWeight500>
                <InterTextWeight400 className='text-sm text-Spanish-Gray'>Lorem ipsum dolor sit am etet adip</InterTextWeight400>
            </StyledView>
        </StyledButton>
    )
}

export default CardOffer