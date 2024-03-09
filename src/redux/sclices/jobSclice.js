import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
    name: 'Jobs',
    initialState: {
        loading: false,
        error: null,
        jobs: [],
        job: {},
    },
    reducers: {
        setLoading: (state, action) => {
            state.error = null
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = null
            state.error = action.payload
        },
        setJobs: (state, action) => {
            state.error = null
            state.jobs = action.payload
        },
        setJob: (state, action) => {
            state.error = null
            state.job = action.payload
        },
    },
});

export const {
    setLoading,
    setError,
    setJobs,
    setJob
} = jobsSlice.actions;

export default jobsSlice.reducer;
