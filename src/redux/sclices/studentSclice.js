import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
    name: 'Student',
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        student: null,
        updateStudent: null,
        allJobs: [],
        applyInternships: [],
        applyJobs: [],
        page: {},
        applications: [],
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.error = null,
                state.isAuthenticated = action.payload;
        },
        setLoading: (state, action) => {
            state.error = null,
                state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = null
            state.error = action.payload
        },
        setStudent: (state, action) => {
            state.error = null
            state.student = action.payload
        },
        setUpdateStudent: (state, action) => {
            state.error = null
            state.updateStudent = action.payload
        },
        setApplyInternships: (state, action) => {
            state.error = null
            state.applyInternships = action.payload
        },
        setApplyJobs: (state, action) => {
            state.error = null
            state.applyJobs = action.payload
        },
        setAllJobs: (state, action) => {
            state.error = null
            state.allJobs = action.payload
        },
        setPage: (state, action) => {
            state.error = null
            state.page = action.payload
        },
        setApplication: (state, action) => {
            state.error = null
            state.applications = action.payload
        }
    },
});

export const {
    setIsAuthenticated,
    setLoading,
    setError,
    setStudent,
    setUpdateStudent,
    setApplyInternships,
    setApplyJobs,
    setAllJobs,
    setPage,
    setApplication
} = studentSlice.actions;

export default studentSlice.reducer;
