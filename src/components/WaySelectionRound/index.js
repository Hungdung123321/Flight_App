import React, { memo } from 'react'
import { ButtonBig, ButtonIcon, StyledView } from '../ReactCores/ReactCoreStyled'
import { FLIGHT_SELECTION_TYPE } from '../../constants/common'
import { IC_ArrowDownUp } from '../../assets'
import FlightSelection from '../FlightSelection'

const WaySelectionRound = (props) => {

    const {
        onDeparture,
        onReturn,
        onSearch,
        DepartureDate,
        ReturnDate
    } = props;

    return (
        <StyledView className='h-22.5 relative'>
            <FlightSelection
                selectionType={FLIGHT_SELECTION_TYPE.FROM_TO}
                label={'From'}
            />
            <StyledView className='relative justify-center h-1.5 z-40'>
                <ButtonIcon
                    className={'absolute right-1.5 w-3 h-3 rounded-full border items-center justify-center border-Spanish-Gray bg-white'}
                    Svg={<IC_ArrowDownUp />}
                />
            </StyledView>
            <FlightSelection
                selectionType={FLIGHT_SELECTION_TYPE.FROM_TO}
                isDepart={false}
                label={'to'}
            />
            <StyledView className='flex-row justify-between items-center mt-1.5'>
                <FlightSelection
                    className={'w-9'}
                    selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                    label={'Departure'}
                    onPress={onDeparture}
                    textcontent={DepartureDate}
                />
                <FlightSelection
                    className={'w-9'}
                    selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                    label={'return'}
                    onPress={onReturn}
                    textcontent={ReturnDate}
                />
            </StyledView>
            <StyledView className='flex-row justify-between items-center mt-1.5 '>
                <FlightSelection
                    className={'w-9'}
                    label={'Traveller'}
                    textcontent={'1 Adult'}
                />
                <FlightSelection
                    className={'w-9'}
                    label={'Class'}
                    textcontent={'Economy'}
                />
            </StyledView>
            <ButtonBig text={'Search'} classNameButton={'mt-1.5'} onPress={onSearch} />
        </StyledView>
    )
}

export default memo(WaySelectionRound)