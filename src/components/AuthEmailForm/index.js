import React from 'react'
import { AuthInput, TextButton } from '../ReactCores/ReactCoreStyled'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAME } from '../../routes/routes'

const AuthEmailForm = () => {

    const navigation = useNavigation()

    return (
        <>
            <AuthInput
                authInputClassName={'mb-1'}
                labelText={'Email Address'}
                textHolder={'hello@example.com'}
                textContentType={'emailAddress'}
            />
            <AuthInput
                labelText={'Password'}
                textHolder={'Password'}
                rightcontent={<TextButton onPress={() => navigation.navigate(SCREEN_NAME.FORGOT)} textStyle={'text-o'}>Forgot Password?</TextButton>}
                showEye={true}
            />
        </>
    )
}

export default AuthEmailForm

