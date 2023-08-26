import React, { useState } from 'react'
import { StyledTextInput, StyledView, TextBodySmall } from '../ReactCores/ReactCoreStyled'
import { AppButton } from '../../components'
import { AUTH_FORM_STATUS, BUTTON_TYPE } from '../../constants/common'
import { IC_Eye } from '../../assets'
import { COLORS } from '../../constants/colors'


const AuthForm = ({ label, hideLabel = false, placeholder, setText, classNameAuthForm, Path, showHidenEye = false }) => {

    const [Focus, setFocus] = useState(AUTH_FORM_STATUS.UNFOCUS)

    const handleEndEditing = (value) => {
        setText?.(value.nativeEvent.text)
    }


    return (
        <StyledView className={`w-full ${classNameAuthForm}`}>
            {hideLabel ? <></> : <TextBodySmall className='mb-0.5 text-dark-gray'>{label || ''}</TextBodySmall>}
            <StyledView className={`relative w-full h-3.5 px-1 flex-row items-center border ${Focus.border_color} rounded-lg`}>
                {Path(Focus?.stroke)}
                <StyledTextInput
                    className={'w-4/5 '}
                    placeholder={placeholder}
                    onEndEditing={handleEndEditing}
                    onFocus={() => setFocus(AUTH_FORM_STATUS.FOCUS)}
                    onBlur={() => setFocus(AUTH_FORM_STATUS.UNFOCUS)}
                    placeholderTextColor={COLORS.DARK_GRAY}
                />
                {
                    showHidenEye ? <AppButton classNameButton={'absolute top-0 right-0.5 bottom-0'} buttontype={BUTTON_TYPE.ICON} PatchImage={IC_Eye} /> : <></>
                }
            </StyledView>
        </StyledView>
    )
}

export default AuthForm