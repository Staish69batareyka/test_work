import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from './surveySlice'
import uploadReducer from './uploadSlice'

export const store = configureStore({
    reducer: {
        survey: surveyReducer,
        upload: uploadReducer,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
