/* eslint-disable default-param-last */
import counterFilterTypes from "../type/counterFilter";

const initialState = {
    count: 0
};

export default function counterFilterReducer(state = initialState, action) {
    switch (action.type) {
        case counterFilterTypes.INCREASE_COUNTER:
            return {
                ...state,
                count: state.count + 1
            };
        case counterFilterTypes.DECREASE_COUNTER:
            return {
                ...state,
                count: state.count - 1
            };
        case counterFilterTypes.RESET_COUNTER:
            return {
                ...state,
                count: 0
            };
        case counterFilterTypes.ALL_SUBCATEGORIES_COUNTER:
            return {
                ...state,
                count: action.payload,
            };
        default: return state;
    }
}