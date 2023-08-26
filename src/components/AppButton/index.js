import React from 'react'
import { StyledButton, StyledImage, StyledView, TextBodySmall } from '../ReactCores/ReactCoreStyled'
import { BUTTON_TYPE } from '../../constants/common';

const AppButton = ({ classNameButton, classNameContent, content, PatchImage, children, buttontype, ...rest }) => {

    const renderContent = () => {

        switch (buttontype) {
            case BUTTON_TYPE.TEXT:
                return <TextBodySmall className={`m-auto ${classNameContent}`}>{content}</TextBodySmall>;
            case BUTTON_TYPE.ICON:
                return <StyledImage className='m-auto' source={PatchImage} />;
            case BUTTON_TYPE.LEFT_ICON_AND_TEXT:
                return <StyledView className={` flex-row items-center m-auto `}>
                    <StyledImage source={PatchImage} />
                    <TextBodySmall className={`ml-0.5 ${classNameContent}`}>{content}</TextBodySmall>
                </StyledView>
            default:
                return children;
        }
    }

    return (
        <StyledButton hitSlop={2} className={classNameButton} {...rest}>
            {renderContent()}
        </StyledButton>
    )
}

export default AppButton