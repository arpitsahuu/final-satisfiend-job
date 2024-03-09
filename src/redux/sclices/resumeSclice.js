import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        loading: null,
        error: null,
        resume: {
            education: [],
            jobs: [],
            responsibilities: [],
            Intership: [],
            courses: [],
            projects: [],
            skills: [],
            worksamples: [],
            accomplishments: [],
        }
    },
    reducers: {
        setLoading: (state, action) => {
            state.error = null,
                state.loading = action.payload;
        },
        setResumeError: (state, action) => {
            state.error = null
            state.error = action.payload
        },
        setResume: (state, action) => {
            state.error = null
            state.resume = action.payload
        },
        setUpdateStudent: (state, action) => {
            state.error = null
            state.updateStudent = action.payload
        },

    },
});

export const {
    setResumeLoading,
    setResumeError,
    setResume
} = resumeSlice.actions;

export default resumeSlice.reducer;