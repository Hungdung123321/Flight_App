import { configureStore } from '@reduxjs/toolkit'
import SelectDateSlice from './SelectDateSlice'

export const store = configureStore({
    reducer: {
        Date: SelectDateSlice
    },
})