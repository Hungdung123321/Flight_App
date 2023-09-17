import React from 'react'
import { InterTextWeight400, InterTextWeight500, InterTextWeight600, StyledButton, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { AthTabView } from '../../components';

const Onboarding = () => {
    return (
        <StyledView className='flex-1 pt-2 px-1.5'>
            <StyledView className='mt-5.125 mb-3'>
                <InterTextWeight600 className='text-2xl'>Login</InterTextWeight600>
                <InterTextWeight400 className='text-lg text-gray'>Welcome back to the app</InterTextWeight400>
            </StyledView>
            <AthTabView />
            <StyledView className='h-18'>

            </StyledView>
        </StyledView>
    )
}

export default Onboarding