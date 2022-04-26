import { TOGGLE_ADD_MODAL, TOGGLE_CLOSE_MODAL, TOGGLE_EDIT_MODAL } from "./constant"

export const modalAddVocab = () => {
    return {
        type: TOGGLE_ADD_MODAL
    }
}

export const modalEditVocab = (id) => {
    return {
        type: TOGGLE_EDIT_MODAL,
        payload: id
    }
}

export const modalClose = () => {
    return {
        type: TOGGLE_CLOSE_MODAL
    }
}