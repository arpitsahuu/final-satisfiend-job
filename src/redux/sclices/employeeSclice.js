import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'Employee',
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        employee: null,
        allApplication:[]
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.error = null
            state.isAuthenticated =true;
        },
        setLoading: (state, action) => {
            state.error = null
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = null
            state.error = action.payload
        },
        setEmployee: (state, action) => {
            state.error = null
            state.employee = action.payload
        },
        setAllApplications: (state, action) => {
            state.error = null
            state.allApplication = action.payload
        }
    },
});

export const {
    setIsAuthenticated,
    setLoading,
    setError,
    setEmployee,
    setUpdateEmployee,
    setAllApplications
} = employeeSlice.actions;

export default employeeSlice.reducer;
