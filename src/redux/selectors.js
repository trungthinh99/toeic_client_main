import { createSelector } from "reselect";
import { vocabListSelector } from "./modules/vocab/selector";
import { modalSelector } from "./modules/vocab/modal/selector";

export const getUserByID = createSelector(
    vocabListSelector,
    modalSelector,
    (vocab, modal) => {
        return vocab.find(word => {
            // console.log(word.key, modal.key)
            return word.key === modal.key
        })
    }
)