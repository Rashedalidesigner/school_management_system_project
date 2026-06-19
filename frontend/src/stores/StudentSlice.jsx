import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const StudentSlice = createSlice({
    name: "Student",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.value = action.payload
        }
    }
});


export const { addStudent } = StudentSlice.actions;

export default StudentSlice.reducer;