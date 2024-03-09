import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './sclices/studentSclice'
import employeeSlice from './sclices/employeeSclice'
import jobsSlice from './sclices/jobSclice';
import resumeSlice from "./sclices/resumeSclice"

export default configureStore({
    reducer: {
        student: counterSlice,
        employee: employeeSlice,
        Jobs: jobsSlice,
        Resume: resumeSlice
    },
})