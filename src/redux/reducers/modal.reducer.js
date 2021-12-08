import {HIDE_MODAL, SHOW_MODAL} from "../Types";

const initialState = {
    showing: false,
    product: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { showing: true, product: action.product }
        case HIDE_MODAL:
            return { showing: false, product: null }
        default:
            return state;
    }
}