import { createSelector } from "reselect";

export const vocabListSelector = (state) => state.vocab.list;
export const vocabFilterSelector = (state) => state.vocab.filter;

export const vocabRemainingSelector = createSelector(
    vocabListSelector,
    vocabFilterSelector,
    (vocabList, searchText) => {
        return vocabList.filter(vocab => {
            return vocab.name.includes(searchText)
        })
    }
);