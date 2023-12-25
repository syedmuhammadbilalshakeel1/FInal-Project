import categoriesTypes from "../type/categories";
import useServer from "../../hooks/useServer";


export function showCategories(data) {
  return {
    type: categoriesTypes.CATEGORIES_SUCCESS,
    payload: data,
  };
}
export function loadingCategories() {
  return {
    type: categoriesTypes.CATEGORIES_REQUEST

  };
}

export function failureCategories(data) {
  return {
    type: categoriesTypes.CATEGORIES_FAILURE,
    payload: data,
  };
}

export const fetchCategories = () => {
  return async (dispatch) => {
    const { getCategories } = useServer();
    try {
      dispatch(loadingCategories());
      const categories = await getCategories();
      dispatch(showCategories(categories));
    } catch (error) {
      dispatch(failureCategories(error));
    }
  };
};