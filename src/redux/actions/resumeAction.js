import axios from 'axios';
import { setResume } from '../sclices/resumeSclice';
const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/resume`

const config = () => {

    return {
        headers: {
            'authorization': localStorage.getItem('token') || '' // Ensure token is always a string
        },
        withCredentials: true
    };
};

/* auth */
export const setResumeaction = (student) => async (dispatch) => {
    try {
        dispatch(setResume(student.resume));
    } catch (error) {
        dispatch(setError(error?.response?.data?.message || "could not fatch resume data"));
    }
};

export const addAducation = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/add-education`, { ...data }, config());
        dispatch(setResume(res.res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const updateAducation = (data, id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/edit-education/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteAducation = (id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/delete-education/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addJob = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/add-job`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const updateJob = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-job/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteJob = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-job/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addinternship = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/add-internship`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);

    }
};

export const updateintership = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-internship${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteinternship = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-internship/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addresponsibility = (data) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/add-responsibility`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const updateresponsibility = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-responsibility/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteresponsibility = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-responsibility/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addcourse = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/add-course`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const updatecourse = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-course/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deletecourse = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-course/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addproject = (data) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/add-project`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);

    }
};

export const updateproject = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-project/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteproject = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-project/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addskill = (data) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/add-skill`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);

    }
};

export const updateskill = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-skill/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteskill = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-skill/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addworksample = (data) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/add-worksample`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);

    }
};

export const updateworksample = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-worksample/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteworksample = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-worksample/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const addaccomplishment = (data) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/add-accomplishment'`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);

    }
};

export const updateaccomplishment = (data, id) => async (dispatch) => {
    try {
        const res = await axios.post(`${basePath}/edit-accomplishment/${id}`, { ...data }, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};

export const deleteaccomplishment = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading(true));
        const res = await axios.post(`${basePath}/delete-accomplishment/${id}`, {}, config());
        dispatch(setResume(res.data.resume));
    } catch (error) {
        console.error(error);
    }
};