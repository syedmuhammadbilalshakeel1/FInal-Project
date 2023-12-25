import recentlyProducts from "../type/recentlyProducts";
import useServer from "../../hooks/useServer";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { getProduct } = useServer();

export function addToRecentlyViewed(product) {
  return {
    type: recentlyProducts.FILL_RECENTLY_PRODUCTS,
    payload: product,
  };
}


export function getRecentlyProducts(itemNo) {
  // eslint-disable-next-line func-names
  return async function (dispatch) {
    const data = await getProduct(itemNo);
    dispatch(addToRecentlyViewed(data));
  };
}
