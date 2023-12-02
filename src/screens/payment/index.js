import React from 'react'
import { ButtonBig, InterTextWeight400, InterTextWeight500, InterTextWeight700, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { IC_Calender, IC_FlightLogo, IMG_AirPlaneFlight } from '../../assets'
import { STYLE_BUTTON } from '../../constants/common'

const PayMent = () => {
    return (
        <StyledView className={'flex-1 bg-white'}>
            <StyledView className={'w-full px-2 py-1.5 bg-light-gray'}>
                <StyledView className={'flex-row justify-between items-center py-1'}>
                    <IC_FlightLogo />
                    <StyledView className={'flex-row items-center'}>
                        <IC_Calender />
                        <InterTextWeight400 className='text-sm text-black ml-0.5'>15/07/2022</InterTextWeight400>
                    </StyledView>
                </StyledView>
                <StyledView className='flex-row justify-between items-center pb-0.5 py-1 border-t-0.5 border-b-0.5 border-Spanish-Gray/30'>
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
                <StyledView className={'flex-row justify-between items-center pt-1.5'}>
                    <InterTextWeight400 className='text-sm text-black'>Total</InterTextWeight400>
                    <InterTextWeight700 className='text-2xl text-o'>$230</InterTextWeight700>
                </StyledView>
            </StyledView>
            <StyledView className={'h-19'}></StyledView>
            <StyledView className={'px-2'}>
                <ButtonBig classNameButton={'mb-1'} text={'comfirm'} />
                <ButtonBig text={'cancel'} styleType={STYLE_BUTTON.INACTIVE} />
            </StyledView>
        </StyledView>
    )
}

export default PayMent