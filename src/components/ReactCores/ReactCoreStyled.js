import { Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from "react-native";
import { IC_Back, IC_Eye, IC_Eyeoff, IC_Google } from "../../assets";
import { useState } from "react";
import { styled } from "nativewind";
import { COLORS } from "../../constants/colors";
import OTPTextView from "react-native-otp-textinput";
import styles from "./style";
import { STYLE_BUTTON } from "../../constants/common";

// React core styled
export const StyledText = styled(Text)
export const StyledView = styled(View)
export const StyledButton = styled(TouchableOpacity)
export const StyledImage = styled(Image)
export const StyledTextInput = styled(TextInput)
export const StyledFlatList = styled(FlatList)
export const StyledScrollView = styled(ScrollView)

// fonts
export const InterTextWeight400 = styled(Text, 'font-Inter[Inter-Regular] text-black');
export const InterTextWeight500 = styled(Text, 'font-Inter[Inter-Medium] text-black');
export const InterTextWeight600 = styled(Text, 'font-Inter[Inter-SemiBold] text-black');
export const InterTextWeight700 = styled(Text, 'font-Inter[Inter-Bold] text-black');

export const TextButton = (props) => {
    const { children, textStyle, buttonStyle, onPress } = props;

    return (
        <StyledButton onPress={onPress} className={buttonStyle}>
            <InterTextWeight500 className={`text-xs ${textStyle}`}>{children}</InterTextWeight500>
        </StyledButton>
    )
}

export const ButtonBig = (props) => {
    const { text, classNameButton, onPress, styleType = STYLE_BUTTON.ACTIVE } = props;

    return (
        <TextButton
            buttonStyle={styleType ?
                `w-full h-3 bg-o rounded-lg ${classNameButton}` :
                `w-full h-3 bg-white rounded-lg border border-o ${classNameButton}`
            }
            textStyle={styleType ?
                'text-white text-lg m-auto' :
                'text-o text-lg m-auto'
            }
            onPress={onPress}
        >
            {text}
        </TextButton>
    )
}

export const GooleLoginButton = (props) => {

    return (
        <StyledButton className="flex-row w-full h-3 bg-Platinum rounded-lg">
            <StyledView className="flex-row m-auto">
                <IC_Google />
                <InterTextWeight400 className="text-Independence">   Continue with Google</InterTextWeight400>
            </StyledView>
        </StyledButton>
    )
}

export const AuthBackButton = (props) => {

    const { buttonStyle, onPress } = props;

    return (
        <StyledButton onPress={onPress} className={`w-2.5 h-2.5 justify-center items-center bg-Platinum rounded-lg ${buttonStyle}`}>
            <IC_Back />
        </StyledButton>
    )
}

export const ButtonIcon = (props) => {
    const { Svg, onPress, ...restBtn } = props;

    return (
        <StyledButton
            onPress={onPress}
            {...restBtn}
        >
            {Svg}
        </StyledButton>
    )
}


// Inputs
export const AuthInput = (props) => {
    const {
        rightcontent = null,
        labelText, textHolder,
        authInputClassName,
        showEye = false,
        ...restInput
    } = props;
    const [isEyeoff, setIsEyeoff] = useState(false)
    const [isActive, setIsActive] = useState(false)

    return (
        <StyledView className={authInputClassName}>
            <StyledView className='flex-row justify-between items-center mb-0.5'>
                <InterTextWeight500 className='text-black text-base'>{labelText}</InterTextWeight500>
                {rightcontent}
            </StyledView>
            <StyledView className={`flex-row items-center w-full h-3 px-1 rounded-lg border ${isActive ? 'border-black' : 'border-Light-Silver'}`}>
                <StyledTextInput
                    className='flex-1'
                    placeholder={textHolder}
                    style={styles.AuthInputTextColor}
                    placeholderTextColor={COLORS.COOL_GRAY}
                    secureTextEntry={isEyeoff}
                    onFocus={() => setIsActive((pre) => !pre)}
                    onEndEditing={() => setIsActive((pre) => !pre)}
                    {...restInput}
                />
                {
                    showEye ? <StyledButton onPress={() => setIsEyeoff(pre => !pre)}>
                        {isEyeoff ? <IC_Eyeoff /> : <IC_Eye />}
                    </StyledButton>
                        : null
                }
            </StyledView>
        </StyledView>
    )
}

export const OTPAuthInput = (props) => {

    const { ref, handleTextChange, textInputStyle, ...rest } = props;


    return <OTPTextView
        ref={ref}
        handleTextChange={handleTextChange}
        inputCount={4}
        tintColor={COLORS.ORIOLES_ORANGE}
        textInputStyle={{ width: 64, height: 64, borderWidth: 2, borderBottomWidth: 2, borderRadius: 8 }}
        {...rest}
    />
}