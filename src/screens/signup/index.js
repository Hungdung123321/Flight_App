import React from 'react'
import { Heading4, StyledScrollView, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { AppButton, AuthForm } from '../../components'
import { IC_Account2, IC_Arrow_Right, IC_Google } from '../../assets'
import { BUTTON_TYPE } from '../../constants/common'
import { useNavigation } from '@react-navigation/native'


const Signup = () => {

    const navigation = useNavigation()

    return (
        <StyledScrollView className='relative px-1'>
            <AppButton
                classNameButton={'absolute left-0.375 top-2.5'}
                buttontype={BUTTON_TYPE.LEFT_ICON_AND_TEXT}
                content={'Quay lại'}
                classNameContent={'text-brilliant_azure'}
                PatchImage={IC_Arrow_Right}
                onPress={() => navigation.goBack()}
            />
            <StyledView className='mt-6'>
                <Heading4 className={'text-brilliant_azure text-center mb-2.5'}>Đăng Ký</Heading4>
                <AuthForm
                    hideLabel={true}
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    classNameAuthForm={'mb-2'}
                    Path={(color) => <IC_Account2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                />
                <AuthForm
                    hideLabel={true}
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    classNameAuthForm={'mb-2'}
                    Path={(color) => <IC_Account2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                />
                <AuthForm
                    hideLabel={true}
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    classNameAuthForm={'mb-2'}
                    Path={(color) => <IC_Account2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                />
                <AuthForm
                    hideLabel={true}
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    classNameAuthForm={'mb-2'}
                    Path={(color) => <IC_Account2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                />
                <AuthForm
                    hideLabel={true}
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    Path={(color) => <IC_Account2 stroke={color} classNameSVG={'my-auto mr-0.5'} />}
                />
            </StyledView>
            <AppButton
                classNameButton={'w-full h-3 mt-4 bg-brilliant_azure rounded-lg'}
                classNameContent={'text-white'}
                buttontype={BUTTON_TYPE.TEXT}
                content={'Đăng nhập'}
            />
            <AppButton
                classNameButton={'w-full h-3 mt-1 bg-white border border-black rounded-lg'}
                classNameContent={'text-black text-center'}
                buttontype={BUTTON_TYPE.LEFT_ICON_AND_TEXT}
                PatchImage={IC_Google}
                content={'Đăng nhập bằng Google'}
            />
        </StyledScrollView>
    )
}

export default Signup