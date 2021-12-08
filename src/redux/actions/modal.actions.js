import {HIDE_MODAL, SHOW_MODAL} from "../Types";

export const showModal = ({ product }) => ({
    type: SHOW_MODAL,
    product,
});

export const hideModal = () => ({
    type: HIDE_MODAL
});