import {TOGGLE_LOADER} from "../Types";

export const toggleLoader = (loading) => {
    return {
        type: TOGGLE_LOADER,
        loading,
    }
}