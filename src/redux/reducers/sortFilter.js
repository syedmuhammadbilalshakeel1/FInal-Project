/* eslint-disable default-param-last */
import sortFilterTypes from "../type/sortFilter";

const initialState = {
    sortValue: "+"
};

export default function sortFilterReducer(state = initialState, action) {
switch (action.type) {
    case sortFilterTypes.LOW_TO_HIGH:
        return {
            ...state,
            sortValue: "+"
        };
    case sortFilterTypes.HIGH_TO_LOW:
        return {
            ...state,
            sortValue: "-"
        };
        default: return state;
    }
}