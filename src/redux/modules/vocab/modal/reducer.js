import { TOGGLE_EDIT_MODAL, TOGGLE_ADD_MODAL, TOGGLE_CLOSE_MODAL } from "./constant";

const initState = {
    key: null,
    isToggle: false
}

const modalReucer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_MODAL:
            return {
                ...state,
                key: null,
                isToggle: !state.isToggle
            }

        case TOGGLE_EDIT_MODAL:
            return {
                ...state,
                key: action.payload,
                isToggle: !state.isToggle
            }

        case TOGGLE_CLOSE_MODAL:
            return {
                ...state,
                key: null,
                isToggle: false
            }

        default:
            return state;
    }
}

export default modalReucer