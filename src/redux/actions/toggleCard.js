import toggleCard from "../type/toggleCard";

export default function toggleCardBtn(data) {
  return {
    type: toggleCard.TOGGLE_CARD,
    payload: data,
  };
}