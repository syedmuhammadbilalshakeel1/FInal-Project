import toggleCard from "../type/card";

export default function toggleCardBtn(data) {
  return {
    type: toggleCard.TOGGLE_CARD,
    payload: data,
  };
}