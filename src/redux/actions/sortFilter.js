import sortFilterTypes from "../type/sortFilter";

export function sortLowToHighPrice() {
    return { type: sortFilterTypes.LOW_TO_HIGH };
}

export function sortHighToLowPrice() {
    return { type: sortFilterTypes.HIGH_TO_LOW };
}