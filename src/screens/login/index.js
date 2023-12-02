import React from 'react'
import { ButtonBig, GooleLoginButton, InterTextWeight400, InterTextWeight600, StyledScrollView, StyledView, TextButton } from '../../components/ReactCores/ReactCoreStyled'
import { AthTabView } from '../../components';
import { KeyboardAvoidingView } from 'react-native';
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { BOTTOMTABS_HOME, SCREEN_NAME } from '../../routes/routes';

const Login = () => {

    const navigation = useNavigation();

    return (
        <StyledScrollView scrollEnabled={false} className='flex-1 pt-2 px-1.5'>
            <KeyboardAvoidingView behavior='padding'>
                <StyledView className='mt-5.125 mb-3'>
                    <InterTextWeight600 className='text-2xl'>Login</InterTextWeight600>
                    <InterTextWeight400 className='text-lg text-gray'>Welcome back to the app</InterTextWeight400>
                </StyledView>
                <AthTabView />
                <StyledView >
                    <BouncyCheckbox
                        size={20}
                        text={'Keep me signed in'}
                        fillColor="red"
                        unfillColor={COLORS.LIGHT_GRAY}
                        iconStyle={{ borderRadius: 0 }}
                        innerIconStyle={{ borderRadius: 0, borderColor: 'transparent' }}
                        textStyle={{ textDecorationLine: 'none' }}
                    />
                    <ButtonBig onPress={() => navigation.navigate(BOTTOMTABS_HOME)} classNameButton={'mt-1'} text={'Login'} />
                    <StyledView className='flex-row justify-between items-center my-1'>
                        <StyledView className='w-4/12 h-0.125 bg-Platinum' />
                        <InterTextWeight400 className='text-sm text-gray'>or sign in with</InterTextWeight400>
                        <StyledView className='w-4/12 h-0.125 bg-Platinum' />
                    </StyledView>
                    <GooleLoginButton />
                </StyledView>
                <TextButton onPress={() => navigation.navigate(SCREEN_NAME.SIGNUP)} textStyle={'text-o text-base font-semibold mx-auto mt-2.5'}>Create an account</TextButton>
            </KeyboardAvoidingView>
        </StyledScrollView>
    )
}

export default Login