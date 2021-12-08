import {
    CLEAR_PRODUCTS,
    GET_PRODUCTS_REQUEST_ERROR,
    GET_PRODUCTS_REQUEST_INIT, GET_PRODUCTS_REQUEST_SUCCESS,
    SAVE_PRODUCT_REQUEST_ERROR,
    SAVE_PRODUCT_REQUEST_INIT,
    SAVE_PRODUCT_REQUEST_SUCCESS
} from "../Types";

const initialState = {
    data: null,
    loading: false,
    error: false,
    success: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PRODUCT_REQUEST_INIT:
            return { ...state, loading: true, error: null, success: false }
        case SAVE_PRODUCT_REQUEST_SUCCESS:
            return { ...state, loading: false, error: null, success: true }
        case SAVE_PRODUCT_REQUEST_ERROR:
            return { ...state, loading: false, error: action.error, success: false }
        case GET_PRODUCTS_REQUEST_INIT:
            return { ...state, data: null, loading: true, error: null, success: false }
        case GET_PRODUCTS_REQUEST_SUCCESS:
            return { ...state, loading: false, success: false, data: action.data }
        case GET_PRODUCTS_REQUEST_ERROR:
            return { ...state, loading: false, error: action.error, success: false }
        case CLEAR_PRODUCTS:
            return {...initialState}
        default:
            return state;
    }
}