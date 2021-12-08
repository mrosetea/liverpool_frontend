import {
    ADD_PRODUCT_TO_BAG_ERROR,
    ADD_PRODUCT_TO_BAG_INIT, GET_BAG_ERROR,
    GET_BAG_INIT,
    GET_BAG_SUCCESS, HIDE_BAG_MODAL, SHOW_BAG_MODAL,
    TOGGLE_LOADER
} from "../Types";
import axiosInstance from "../../service/axios.instance";
import {hideModal} from "./modal.actions";

export const addProductToBag = (product) => {
    return async dispatch => {
        try {
            dispatch({
                type: TOGGLE_LOADER,
                loading: true
            });
            dispatch({
                type: ADD_PRODUCT_TO_BAG_INIT
            });
            await axiosInstance.post('/user/addToCart', {product});
            const response = await axiosInstance.get('/user/getCart');
            dispatch({
                type: GET_BAG_SUCCESS,
                bag: response.data.data,
            });
            dispatch(hideModal());
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
        } catch (e) {
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
            dispatch({
                type: ADD_PRODUCT_TO_BAG_ERROR,
                error: "Error al agregar el producto."
            });
        }
    }
}

export const getBag = () => {
    return async dispatch => {
        try {
            dispatch({
                type: TOGGLE_LOADER,
                loading: true
            });
            dispatch({
                type: GET_BAG_INIT,
            });
            const response = await axiosInstance.get('/user/getCart');
            dispatch({
                type: GET_BAG_SUCCESS,
                bag: response.data.data
            });
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
        } catch (e) {
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
            dispatch({
                type: GET_BAG_ERROR,
                error: "Error al agregar el producto."
            });
        }
    }
}

export const deleteFromBag = (product) => {
    return async dispatch => {
        const response = await axiosInstance.post('/user/deleteFromCart', { product });
        dispatch(getBag());
    }
}

export const showBagModal = () => {
    return {
        type: SHOW_BAG_MODAL
    }
}

export const hideBagModal = () => {
    return {
        type: HIDE_BAG_MODAL
    }
}