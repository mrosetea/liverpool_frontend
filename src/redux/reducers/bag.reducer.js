import {
    ADD_PRODUCT_TO_BAG_SUCCESS,
    GET_BAG_ERROR,
    GET_BAG_INIT,
    GET_BAG_SUCCESS,
    HIDE_BAG_MODAL,
    SHOW_BAG_MODAL
} from "../Types";

const initialState = {
    bag: [],
    loading: false,
    error: null,
    show: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BAG_INIT:
            return { ...state, loading: true, success: false, error: null };
        case GET_BAG_SUCCESS:
            return { ...state, loading:false, bag: action.bag, success: true, error: null };
        case GET_BAG_ERROR:
            return { ...state, loading: false, success: false, error: action.e }
        case ADD_PRODUCT_TO_BAG_SUCCESS:
            return { ...state, loading: false, success: true, error: null, bag: action.bag }
        case SHOW_BAG_MODAL:
            return { ...state, show: true }
        case HIDE_BAG_MODAL:
            return { ...state, show: false }
        default:
            return state;
    }
}