import toggleCard from "../type/toggleCard";

const initialState = { cardView: true };

// eslint-disable-next-line default-param-last
export default function toggleCardReduser(state = initialState, action) {
  switch (action.type) {
    case toggleCard.TOGGLE_CARD:
      return {
        ...state,
        cardView: action.payload
      };
    default:
      return state;
  }
}