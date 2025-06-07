import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
    taskId: string | null;
}

const initialState: UploadState = {
    taskId: null,
};

const uploadSlice = createSlice({
    name: "upload",
    initialState,
    reducers: {
        setTaskId(state, action: PayloadAction<string>) {
            state.taskId = action.payload;
        },
        resetTaskId(state) {
            state.taskId = null;
        },
    },
});

export const { setTaskId, resetTaskId } = uploadSlice.actions;
export default uploadSlice.reducer;
