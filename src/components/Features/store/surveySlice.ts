import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SurveyState {
    answers: {
        [questionId: string]: string
    }
}

const initialState: SurveyState = {
    answers: {},
}

const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        setAnswer: (state, action: PayloadAction<{ questionId: string; answer: string }>) => {
            const { questionId, answer } = action.payload
            state.answers[questionId] = answer
        },
    },
})

export const { setAnswer } = surveySlice.actions
export default surveySlice.reducer
