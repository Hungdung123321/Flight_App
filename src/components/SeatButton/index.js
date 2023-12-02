import React from 'react'
import { InterTextWeight500, StyledButton } from '../ReactCores/ReactCoreStyled'

const SeatButton = (props) => {

    const { seatName, ...restBtn } = props

    return (
        <StyledButton className='w-2.5 h-2.5 justify-center items-center bg-Light-Silver opacity-40  rounded-lg ' {...restBtn}>
            <InterTextWeight500>{seatName}</InterTextWeight500>
        </StyledButton>
    )
}

export default SeatButton