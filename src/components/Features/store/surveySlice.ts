import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Answer = string

interface SurveyState {
    general: {
        childName: string
        birthDate: string
        gender: string
        parentName: string
    }
    answers: Record<string, Answer>
    comments: {
        extraInfo: string
        strengths: string
        attentionAreas: string
        specialists: string
    }
}

const initialState: SurveyState = {
    general: {
        childName: '',
        birthDate: '',
        gender: '',
        parentName: '',
    },
    answers: {},
    comments: {
        extraInfo: '',
        strengths: '',
        attentionAreas: '',
        specialists: '',
    }
}
const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        setGeneralField(state, action: PayloadAction<{ field: keyof SurveyState['general'], value: string }>) {
            state.general[action.payload.field] = action.payload.value
        },
        setAnswer(state, action: PayloadAction<{ questionId: string, value: string }>) {
            state.answers[action.payload.questionId] = action.payload.value
        },
        setComment(state, action: PayloadAction<{ field: keyof SurveyState['comments'], value: string }>) {
            state.comments[action.payload.field] = action.payload.value
        },
        resetSurvey(state) {
            Object.assign(state, initialState)
        }
    }
})


export const { setGeneralField, setAnswer, setComment, resetSurvey } = surveySlice.actions
export default surveySlice.reducer
