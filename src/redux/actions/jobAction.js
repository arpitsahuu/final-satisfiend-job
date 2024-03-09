import axios from 'axios';
import { setJobs, setLoading, setError, setJob } from '../sclices/jobSclice';
const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/employer`

const config = () => {
    return {
        headers: {
            'authorization': localStorage.getItem('token') || '' // Ensure token is always a string
        },
        withCredentials: true
    };
};

export const createJobs = (userData) => async (dispatch) => {
    try {

        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/job/create`, { ...userData }, config());
        dispatch(setLoading(false));
        dispatch(setJobs(data.student))
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "createJob failed"));
    }
}

export const allJobs = (filters = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/job/readall`, filters, config());
        dispatch(setLoading(false));
        dispatch(setJobs(data.jobs));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "allJobs failed"));
    }
};

export const getJobById = (id, body = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/job/readsingle/${id}`, body, config());
        dispatch(setLoading(false));
        dispatch(setJob(data.job))
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "createJob failed"));
    }
}

