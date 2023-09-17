import React from 'react'
import { GoldmanTitleText, InriaSmallText, InriaSmallTitleText, SnesTitleText, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { IMG_LogoConsole, IMG_LogoConsole1 } from '../../assets'

const Home = () => {
    return (
        <StyledView>
            <ConsoleCard svg={<IMG_LogoConsole />} />
            <ConsoleCard svg={<IMG_LogoConsole1 />} />
        </StyledView>
    )
}

export default Home