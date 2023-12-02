import React from 'react'
import { AuthBackButton, AuthInput, ButtonBig, InterTextWeight400, InterTextWeight600, StyledScrollView, StyledView, TextButton } from '../../components/ReactCores/ReactCoreStyled'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAME } from '../../routes/routes';

const Forgot = () => {

    const navigation = useNavigation();

    return (
        <StyledScrollView scrollEnabled={false} className='flex-1 pt-2 px-1.5'>
            <AuthBackButton onPress={() => navigation.goBack()} buttonStyle={'mt-2'} />
            <StyledView className='mt-4 mb-3'>
                <InterTextWeight600 className='text-2xl'>Forgot Password?</InterTextWeight600>
                <InterTextWeight400 className='text-lg text-gray'>Enter your email address to get the password reset link.</InterTextWeight400>
            </StyledView>
            <AuthInput
                authInputClassName={'mb-1'}
                labelText={'Email Address'}
                textHolder={'hello@example.com'}
                textContentType={'emailAddress'}
            />
            <ButtonBig onPress={() => navigation.navigate(SCREEN_NAME.VERIFY)} text={'Password Reset'} classNameButton={'mt-2'} />
            <TextButton textStyle={'text-o font-semibold text-base mx-auto mt-18'}>Create an account</TextButton>
        </StyledScrollView>
    )
}

export default Forgot