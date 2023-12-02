import React from 'react'
import { AuthInput, ButtonBig, GooleLoginButton, InterTextWeight400, InterTextWeight600, StyledScrollView, StyledView, TextButton } from '../../components/ReactCores/ReactCoreStyled'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {

    const navigation = useNavigation();

    return (
        <StyledScrollView scrollEnabled={false} className='flex-1 pt-2 px-1.5'>
            <InterTextWeight600 className='text-2xl mt-4 mb-3'>Create an Account</InterTextWeight600>
            <AuthInput
                authInputClassName={'mb-1'}
                labelText={'Name'}
                textHolder={'John Doe'}
                textContentType={'emailAddress'}
            />
            <AuthInput
                authInputClassName={'mb-1'}
                labelText={'Email Address'}
                textHolder={'hello@example.com'}
                textContentType={'emailAddress'}
            />
            <AuthInput
                labelText={'Password'}
                textHolder={'Password'}
                showEye={true}
            />
            <StyledView className='flex-row mt-1.5'>
                <InterTextWeight400 className='text-gray text-xs'> By continuing, you agree to our </InterTextWeight400>
                <TextButton textStyle={'text-o font-normal text-xs'}>terms of service.</TextButton>
            </StyledView>
            <StyledView >
                <ButtonBig classNameButton={'mt-1'} text={'Login'} />
                <StyledView className='flex-row justify-between items-center my-1'>
                    <StyledView className='w-5/12 h-0.125 bg-Platinum' />
                    <InterTextWeight400 className='text-sm text-gray'>or </InterTextWeight400>
                    <StyledView className='w-5/12 h-0.125 bg-Platinum' />
                </StyledView>
                <GooleLoginButton />
            </StyledView>
            <StyledView className='flex-row mx-auto mt-4'>
                <InterTextWeight400 className='text-base text-gray'>Already have an account?</InterTextWeight400>
                <TextButton onPress={() => navigation.goBack()} textStyle={'text-o font-semibold text-base'}> Sign in here</TextButton>
            </StyledView>
        </StyledScrollView>
    )
}

export default Signup