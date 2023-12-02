import React from 'react'
import { AuthInput, TextButton } from '../ReactCores/ReactCoreStyled'

const AuthPhonNumberForm = () => {
    return (
        <>
            <AuthInput
                authInputClassName={'mb-1'}
                labelText={'Email Address'}
                textHolder={'Phone Number'}
                textContentType={'emailAddress'}
            />
            <AuthInput
                labelText={'Password'}
                textHolder={'Password'}
                rightcontent={<TextButton textStyle={'text-o'}>Forgot Password?</TextButton>}
                showEye={true}
            />
        </>
    )
}

export default AuthPhonNumberForm

