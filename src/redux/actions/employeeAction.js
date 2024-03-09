import axios from 'axios';
import { setEmployee, setLoading, setError, setAllApplications } from '../sclices/employeeSclice';
const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/employer`

const config = () => {
    return {
        headers: {
            'authorization': localStorage.getItem('token') || '' // Ensure token is always a string
        },
        withCredentials: true
    };
};

export const currentEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/current`, null, config());
        dispatch(setEmployee(data.employer));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const loginEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/signin`, { ...userData });
        dispatch(setLoading(false));
        localStorage.setItem("token", data.token);
        dispatch(currentEmployee())
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "login failed"));
    }
}

export const registerEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/signup`, { ...userData });
        dispatch(setLoading(false));
        localStorage.setItem("token", data.token);
        dispatch(currentEmployee())

    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "register failed"));
    }
}

export const logoutEmployee = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const data = await axios.get(`${basePath}/signout`, config());
        dispatch(setLoading(false));
        dispatch(setEmployee(null))
        localStorage.removeItem("token")
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "Register failed"));
    }
}

export const updateEmployee = (details) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/update`, details, config());
        dispatch(setEmployee());
        dispatch(currentEmployee())
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const sendMail = (email) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/send-mail`, email, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const resetPassword = (password, id) => async (dispatch) => {
    if (!id) return;
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/forget-link/${id}`, { password }, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}

export const allApplications = (filters = {}) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`${basePath}/allApplications`, filters, config());
        dispatch(setAllApplications(data.applications));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "Request failed"));
    }
};

// export const avatarEmployee = (fileData) => async (dispatch) => {
//     try {
//         dispatch(setLoading(true));
//         const formData = new FormData();
//         formData.append('avatar', fileData);
//         const { data } = await axios.post(`${basePath}/employeravatar`, formData, {
//             withCredentials: true,
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'authorization': `${localStorage.getItem('token')}`
//             },
//         });
//         dispatch(currentEmployee());
//         dispatch(setLoading(false));
//     } catch (error) {
//         dispatch(setLoading(false));
//         console.error(error);
//         dispatch(setError(error?.response?.data?.message || "get current user failed"));
//     }
// }

export const avatarEmployee = (fileData) => async (dispatch) => {
    console.log(fileData, "fileData");
    try {
        dispatch(setLoading(true));
        const formData = new FormData();
        formData.append('organisationlogo', fileData);
        const { data } = await axios.post(`${basePath}/employeravatar`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': `${localStorage.getItem('token')}`
            },
        });
        dispatch(currentEmployee());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.log(error, "error");
        dispatch(setError(error?.response?.data?.message || "get current user failed"));
    }
}



export const updateStatus = (requestData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.post(`${basePath}/job/applicationstatus`, requestData, config());
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        dispatch(setError(error?.response?.data?.message || "Update status failed"));
    }
};
