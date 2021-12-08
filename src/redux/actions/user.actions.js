import axiosInstance from "../../service/axios.instance";
import {
    CLEAR_LOGIN_ERROR,
    DO_LOGIN_REQUEST_ERROR,
    DO_LOGIN_REQUEST_INIT,
    DO_LOGIN_REQUEST_SUCCESS,
    DO_LOGOUT_REQUEST_SUCCESS,
    REGISTER_REQUEST_ERROR,
    REGISTER_REQUEST_INIT,
    REGISTER_REQUEST_SUCCESS,
} from "../Types";
import {toggleLoader} from "./loader.actions";

export const doLogin = (data) => {
    return async dispatch => {
        try {
            dispatch(toggleLoader(true));
            dispatch({
                type: DO_LOGIN_REQUEST_INIT
            });
            const response = await axiosInstance.post('/user/login', data);
            dispatch({
                type: DO_LOGIN_REQUEST_SUCCESS,
                token: response.data.data,
            });
            dispatch(toggleLoader(false));
        } catch (e) {
            dispatch(toggleLoader(false));
            dispatch({
                type: DO_LOGIN_REQUEST_ERROR,
                error: "Los datos introducidos son inválidos."
            });
        }

    }
}

export const clearLoginError = () => {
    return {
        type: CLEAR_LOGIN_ERROR,
    }
}

export const doLogout = () => {
    return {
        type: DO_LOGOUT_REQUEST_SUCCESS,
    }
}

export const doRegister = (data) => {
    return async dispatch => {
        try {
            dispatch(toggleLoader(true));
            dispatch({
                type: REGISTER_REQUEST_INIT
            });
            const response = await axiosInstance.post('/user/register', data);
            dispatch({
                type: REGISTER_REQUEST_SUCCESS,
                success:true,
            });
            dispatch(toggleLoader(false));
        } catch (e) {
            dispatch(toggleLoader(false));
            dispatch({
                type: REGISTER_REQUEST_ERROR,
                error: "Los datos introducidos son inválidos."
            });
        }
    }
}