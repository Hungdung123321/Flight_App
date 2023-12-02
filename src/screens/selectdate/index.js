import React from 'react'
import { Calendar } from 'react-native-calendario';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FLIGHT_SELECTION_TYPE } from '../../constants/common';
import { ButtonBig, StyledView } from '../../components/ReactCores/ReactCoreStyled'
import { handleChangeDate, handleChangeStartDate } from '../../redux/SelectDateSlice';
import { FORMAT, NUMBER_OF_MONTHS, THEME_CALENDER, WAY_SELECTION_TABVIEW_KEY } from '../../constants/date';
import FlightSelection from '../../components/FlightSelection';
import moment from 'moment/moment';

const SelectDate = () => {

    const dispatch = useDispatch()
    const startDate = useSelector((state) => state.Date.startDate)
    const endDate = useSelector((state) => state.Date.endDate)
    const WaySlectionType = useSelector((state) => state.Date.WaySlectionType)
    const navigation = useNavigation()

    const onDate = (date) => {
        switch (WaySlectionType?.key) {
            case WAY_SELECTION_TABVIEW_KEY.ONE_WAY:
                return dispatch(handleChangeStartDate({ date: moment(date).format(FORMAT) }))
            case WAY_SELECTION_TABVIEW_KEY.ROUND:
                return dispatch(handleChangeDate({ date: moment(date).format(FORMAT) }))
        }
    }

    const onComfirm = () => {
        navigation.goBack();
    }

    const renderDatelable = () => {
        return WaySlectionType?.disableRange ?
            <FlightSelection
                className={'mt-1'}
                selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                label={'Departure'}
                textcontent={moment(startDate).format('DD-MM-YYYY')}
            /> :
            <StyledView className='flex-row justify-between mt-1.5'>
                <FlightSelection
                    className={'w-11'}
                    selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                    label={'Departure'}
                    textcontent={moment(startDate).format('DD-MM-YYYY')}
                />
                <FlightSelection
                    className={'w-11'}
                    selectionType={FLIGHT_SELECTION_TYPE.DEPARTURE_DAY}
                    label={'Return'}
                    textcontent={endDate ? moment(endDate).format('DD-MM-YYYY') : null}
                />
            </StyledView>
    }

    const renderComfirmButton = () => {
        switch (WaySlectionType?.key) {
            case WAY_SELECTION_TABVIEW_KEY.ONE_WAY:
                return <ButtonBig onPress={onComfirm} text={'Select'} classNameButton={'absolute bottom-2 self-center'} />;
            case WAY_SELECTION_TABVIEW_KEY.ROUND:
                return endDate ? <ButtonBig onPress={onComfirm} text={'Select'} classNameButton={'absolute bottom-2 self-center'} /> : null;
        }
    }

    return (
        <StyledView className='flex-1 px-1.5 bg-white'>
            {renderDatelable()}
            <Calendar
                onPress={onDate}
                disableRange={WaySlectionType?.disableRange}
                numberOfMonths={NUMBER_OF_MONTHS}
                firstDayMonday={true}
                startDate={moment(startDate).toDate()}
                endDate={moment(endDate).toDate()}
                disableOffsetDays={true}
                disabledDays={false}
                theme={THEME_CALENDER}
            />
            {renderComfirmButton()}
        </StyledView>
    )
}

export default SelectDate