import React, { useState } from 'react'
import { Heading4, StyledScrollView, StyledView, TextBodySmall } from '../../components/ReactCores/ReactCoreStyled'
import { IC_Account2, IC_Google, IC_Password2, IMG_AppLogo } from '../../assets'
import { AppButton, AuthForm } from '../../components'
import { BUTTON_TYPE } from '../../constants/common'
import { DRAWER_NAME, SCREEN_NAME } from '../../routes/routes'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const [Account, setAccount] = useState('')
    const [Password, setPassword] = useState('')
    const navigation = useNavigation()

    return (
        <StyledScrollView className={'flex-1 px-1'}>
            <IMG_AppLogo classNameSVG={'mt-6 mx-auto'} />
            <StyledView className={'w-full mt-4'}>
                <Heading4 className={'text-brilliant_azure text-center'}>Đăng Nhập</Heading4>
                <AuthForm
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    setText={(value) => setAccount(value)}
                    classNameAuthForm={'my-2'}
                    Path={(color) => <IC_Account2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                />
                <AuthForm
                    label={'Mật Khẩu'}
                    placeholder={'Nhập Mật Khẩu'}
                    setText={(value) => setPassword(value)}
                    Path={(color) => <IC_Password2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                    showHidenEye={true}
                />
            </StyledView>
            <AppButton
                classNameButton={'w-full h-3 mt-4 bg-brilliant_azure rounded-lg'}
                classNameContent={'text-white'}
                buttontype={BUTTON_TYPE.TEXT}
                content={'Đăng nhập'}
                onPress={() => navigation.navigate(DRAWER_NAME.MAIN_DRAWER)}
            />
            <AppButton
                classNameButton={'w-full h-3 mt-1 bg-white border border-black rounded-lg'}
                classNameContent={'text-black text-center'}
                buttontype={BUTTON_TYPE.LEFT_ICON_AND_TEXT}
                PatchImage={IC_Google}
                content={'Đăng nhập bằng Google'}
            />
            <StyledView className='flex-row items-end mx-auto mt-1'>
                <TextBodySmall className='text-black'>Ban không có Tài khoản ? </TextBodySmall>
                <AppButton
                    classNameContent={'text-brilliant_azure'}
                    buttontype={BUTTON_TYPE.TEXT}
                    content={'Đăng Ký'}
                    onPress={() => navigation.navigate(SCREEN_NAME.SIGNUP)}
                />
            </StyledView>
        </StyledScrollView>
    )
}

export default Login