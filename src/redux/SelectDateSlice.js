import { createSlice } from '@reduxjs/toolkit'
import { FORMAT, WAY_SELECTION_TABVIEW_KEY, WAY_SELECTION_TABVIEW_ROUTES } from '../constants/date';
import moment from 'moment'

const initialState = {
    nowDate: moment().format(FORMAT),
    startDate: moment().format(FORMAT),
    endDate: null,
    WaySlectionType: WAY_SELECTION_TABVIEW_ROUTES[0]
}

export const SelectDateSlice = createSlice({
    name: 'SelectDate',
    initialState,
    reducers: {
        initDate: (state) => {
            state.startDate = state.nowDate
            state.endDate = null
        },
        setWaySlectionType: (state, action) => {
            state.WaySlectionType = action.payload
        },
        handleChangeDate: (state, action) => {
            const { date } = action.payload;
            const { startDate, endDate, nowDate } = state

            if (startDate) {
                if (endDate || moment(date).toDate() < moment(startDate).toDate()) {
                    state.startDate = date
                    state.endDate = undefined
                } else if (moment(date).toDate() < moment(nowDate).toDate()) {
                    state.startDate = nowDate
                } else if (moment(date).toDate() > moment(startDate).toDate()) {
                    state.endDate = date
                } else {
                    state.startDate = date
                    state.endDate = date
                }
            } else {
                state.startDate = date
            }
        },
        handleChangeStartDate: (state, action) => {
            const { date } = action.payload;
            const { nowDate } = state

            if (moment(date).toDate() > moment(nowDate).toDate()) {
                state.startDate = date
            } else {
                state.startDate = nowDate
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { handleChangeDate, initDate, setWaySlectionType, handleChangeStartDate } = SelectDateSlice.actions

export default SelectDateSlice.reducer

