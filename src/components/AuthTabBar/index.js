import React from 'react'
import { InterTextWeight500, StyledButton, StyledView } from '../ReactCores/ReactCoreStyled'

const AuthTabBar = ({ classNameTextTabBar, classNameWidthTabBar, tabBar, onPress, labelText }) => {
    return (
        <StyledButton onPress={onPress} className={`self-baseline mr-1`}>
            <InterTextWeight500 className={`text-lg text-gray self-baseline ${classNameTextTabBar}`}>{labelText || ''}</InterTextWeight500>
            <StyledView className={`w-2 h-0.375 opacity-0 bg-o rounded-lg mx-auto ${classNameWidthTabBar}`} />
        </StyledButton>
    )
}

export default AuthTabBar