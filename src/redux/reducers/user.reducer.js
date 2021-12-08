import {
    CLEAR_LOGIN_ERROR,
    DO_LOGIN_REQUEST_ERROR,
    DO_LOGIN_REQUEST_INIT,
    DO_LOGIN_REQUEST_SUCCESS,
    DO_LOGOUT_REQUEST_SUCCESS,
    REGISTER_REQUEST_ERROR,
    REGISTER_REQUEST_INIT,
    REGISTER_REQUEST_SUCCESS
} from "../Types";

const initialState = {
    token: null,
    loading: false,
    error: null,
    success: false,
    bag: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN_REQUEST_INIT:
            return { ...state, loading: true };
        case DO_LOGIN_REQUEST_SUCCESS:
            return { token: action.token, loading: false, error: null };
        case DO_LOGIN_REQUEST_ERROR:
            return { ...state, loading: false, error: action.error };
        case DO_LOGOUT_REQUEST_SUCCESS:
            return { ...state, loading: false, token: null, error: null };
        case CLEAR_LOGIN_ERROR:
            return { ...state, success: false, error: null }
        case REGISTER_REQUEST_INIT:
            return { ...initialState, loading: true };
        case REGISTER_REQUEST_SUCCESS:
            return { ...state, loading: false, success: true }
        case REGISTER_REQUEST_ERROR:
            return { ...state, loading: false, success: false, error: action.error }
        default:
            return state;
    }
}