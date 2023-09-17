import React from 'react'
import { InterTextWeight400, InterTextWeight600, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { AUTH_FORM_ROUTES_TAB_VIEW, AUTH_FORM_TAB_VIEW_KEY } from '../../constants/dummydata';
import { AppTabView } from '../../components';

const renderScene = ({ route }) => {
    switch (route.key) {
        case AUTH_FORM_TAB_VIEW_KEY.EMAIL:
            return <StyledView><InterTextWeight600>helo1</InterTextWeight600></StyledView>;
        case AUTH_FORM_TAB_VIEW_KEY.PHONE_NUMBER:
            return <StyledView><InterTextWeight600>helo2</InterTextWeight600></StyledView>;
    }
};

const Onboarding = () => {
    return (
        <StyledView className='flex-1 pt-2 px-1.5'>
            <StyledView className='mt-5.125'>
                <InterTextWeight600 className='text-2xl'>Login</InterTextWeight600>
                <InterTextWeight400 className='text-lg text-gray'>Welcome back to the app</InterTextWeight400>
            </StyledView>
            <AppTabView
                renderScene={renderScene}
                Routes={AUTH_FORM_ROUTES_TAB_VIEW}
            />
        </StyledView>
    )
}

export default Onboarding