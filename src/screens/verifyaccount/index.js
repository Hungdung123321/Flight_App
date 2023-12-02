import React, { useRef, useState } from 'react'
import { AuthBackButton, ButtonBig, InterTextWeight400, InterTextWeight600, OTPAuthInput, StyledScrollView, StyledView, TextButton } from '../../components/ReactCores/ReactCoreStyled'
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const VerifyAccount = () => {

    const navigation = useNavigation();
    const input = useRef(null);
    const [otpInput, setOtpInput] = useState("");

    return (
        <StyledScrollView scrollEnabled={false} className='flex-1 pt-2 px-1.5'>
            <AuthBackButton onPress={() => navigation.goBack()} buttonStyle={'mt-2'} />
            <StyledView className='mt-4 mb-3'>
                <InterTextWeight600 className='text-2xl'>Forgot Password?</InterTextWeight600>
                <InterTextWeight400 className='text-lg text-gray'>Enter your email address to get the password reset link.</InterTextWeight400>
            </StyledView>
            <OTPAuthInput
                ref={input}
                handleTextChange={setOtpInput}
            />
            <ButtonBig
                onPress={() => Alert.alert(otpInput)}
                text={'Verify'}
                classNameButton={'mt-2'}
            />
            <StyledView className='mt-4'>
                <InterTextWeight600 className='text-base text-center'>Resend OTP in 23s</InterTextWeight600>
                <TextButton textStyle={'font-semibold text-base text-gray text-center'}>Resend OTP</TextButton>
            </StyledView>
        </StyledScrollView>
    )
}

export default VerifyAccount