import { createSelector } from "reselect";
import { vocabFilterSelector, vocabListSelector, vocabRemainingSelector } from "./modules/vocab/selector";
import { modalSelector } from "./modules/vocab/modal/selector";

export const getUserByID = createSelector(
    vocabRemainingSelector,
    modalSelector,
    (vocab, modal) => {
        // console.log(vocab);
        return vocab.find(word => {
            // console.log(word.key, modal.key)
            return word.key === modal.key
        })
    }
)