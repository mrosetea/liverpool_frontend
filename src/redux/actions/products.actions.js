import axiosInstance from "../../service/axios.instance";
import {
    CLEAR_PRODUCTS,
    GET_PRODUCTS_REQUEST_ERROR,
    GET_PRODUCTS_REQUEST_INIT,
    GET_PRODUCTS_REQUEST_SUCCESS,
    SAVE_PRODUCT_REQUEST_ERROR, SAVE_PRODUCT_REQUEST_INIT, SAVE_PRODUCT_REQUEST_SUCCESS, TOGGLE_LOADER
} from "../Types";

export const getProducts = ({pageNumber, quantity, q}) => {
    return async dispatch => {
        dispatch({
            type: TOGGLE_LOADER,
            loading: true
        });
        try{
            dispatch({
                type: GET_PRODUCTS_REQUEST_INIT
            });
            const params = {};
            if(pageNumber) params.page = pageNumber;
            if(quantity) params.quantity = quantity;
            if(q) params.q = q;
            const response = await axiosInstance.get('/products', {
                params
            });
            dispatch({
                type: GET_PRODUCTS_REQUEST_SUCCESS,
                data: response.data.data,
            });
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
        }
        catch (e) {
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
            dispatch({
                type: GET_PRODUCTS_REQUEST_ERROR,
            });

        }
    }
}

export const clearProducts = () => ({
    type: CLEAR_PRODUCTS,
})

export const saveProduct = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: TOGGLE_LOADER,
                loading: true
            });
            dispatch({
                type: SAVE_PRODUCT_REQUEST_INIT
            });
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('price', data.price);
            formData.append('image', data.image[0])
            const response = await axiosInstance.post('/products', formData);
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
            dispatch({
                type: SAVE_PRODUCT_REQUEST_SUCCESS,
                success: true
            });
        } catch (e) {
            dispatch({
                type: TOGGLE_LOADER,
                loading: false
            });
            dispatch({
                type: SAVE_PRODUCT_REQUEST_ERROR,
                error: "Error al registrar"
            });
        }
    }
}