export default function useServer() {
  const url = "https://final-project-backend-phi.vercel.app/api";

  //* User registration/login
  async function registerUser(newUserData) {
    const savedCustomer = await fetch(`${url}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return savedCustomer;
  }

  async function loginUser(userData) {
    const loginResult = await fetch(`${url}/customers/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return loginResult;
  }

  async function getUser(token) {
    const user = await fetch(`${url}/customers/customer`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return user;
  }

  //* User data and password changing
  async function updateUserData(userData, token) {
    const updateResult = await fetch(`${url}/customers`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return updateResult;
  }

  async function changeUserPassword(passwords, token) {
    const updateResult = await fetch(`${url}/customers/password`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwords),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return updateResult;
  }

  //* Getting all categories
  async function getCategories() {
    const categories = await fetch(`${url}/catalog`)
      .then((res) => res.json())
      .catch((err) => err);
    return categories;
  }

  async function getPartners() {
    const categories = await fetch(`${url}/partners`)
      .then((res) => res.json())
      .catch((err) => err);
    return categories;
  }

  //* Getting products
  async function getAllProducts() {
    const products = await fetch(`${url}/products`)
      .then((res) => res.json())
      .catch((err) => err);
    return products;
  }

  async function getProduct(itemNo) {
    const product = await fetch(`${url}/products/${itemNo}`)
      .then((res) => res.json())
      .catch((err) => err);
    return product;
  }

  //* Getting slides
  async function getSlides() {
    const slides = await fetch(`${url}/slides`)
      .then((res) => res.json())
      .catch((err) => err);
    return slides;
  }

  //* Get filters
  async function getFilters() {
    const filters = await fetch(`${url}/filters`)
      .then((res) => res.json())
      .catch((err) => err);
    return filters;
  }

  // Get filters categoriesy

  async function getFiltersCategories(categories, sort) {
    const filteredProducts = await fetch(
      `${url}/products/filter?categories=${categories}&sort=${sort}currentPrice`
    )
      .then((res) => res.json())
      .catch((err) => err);
    return filteredProducts;
  }

  // Get filters categories+price

  async function getFiltersCategoriesPrices(categories, min, max, sort) {
    const filteredProducts = await fetch(
      `${url}/products/filter?categories=${categories}&minPrice=${min}&maxPrice=${max}&sort=${sort}currentPrice`
    )
      .then((res) => res.json())
      .catch((err) => err);
    return filteredProducts;
  }

  // Get filters prices
  async function getFiltersPrices(min, max, sort) {
    const filteredProducts = await fetch(
      `${url}/products/filter?minPrice=${min}&maxPrice=${max}&sort=${sort}currentPrice`
    )
      .then((res) => res.json())
      .catch((err) => err);
    return filteredProducts;
  }

  // Get filtered products by input

  async function getSearchedProducts(searchPhrases) {
    const searchResult = await fetch(`${url}/products/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchPhrases),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return searchResult;
  }

  async function getFiltersPricesBySubcategory(
    subcategorieParent,
    min,
    max,
    sort
  ) {
    const filteredProducts = await fetch(
      `${url}/products/filter?categories=${subcategorieParent}&minPrice=${min}&maxPrice=${max}&sort=${sort}currentPrice`
    )
      .then((res) => res.json())
      .catch((err) => err);
    return filteredProducts;
  }

  async function getFiltersCategoriesPricesBySubcategory(
    subcategorieParent,
    checkedSubcategorie,
    min,
    max,
    sort
  ) {
    const filteredProducts = await fetch(
      `${url}/products/filter?categories=${subcategorieParent}&filtertype=${checkedSubcategorie}&minPrice=${min}&maxPrice=${max}&sort=${sort}currentPrice`
    )
      .then((res) => res.json())
      .catch((err) => err);
    return filteredProducts;
  }

  async function getFiltersCategoriesBySubcategory(
    subcategorieParent,
    checkedSubcategorie,
    sort
  ) {
    const filteredProducts = await fetch(
      `${url}/products/filter?categories=${subcategorieParent}&filtertype=${checkedSubcategorie}&sort=${sort}currentPrice`
    )
      .then((res) => res.json())
      .catch((err) => err);
    return filteredProducts;
  }

  async function getWishlist(token) {
    const getFav = await fetch(`${url}/wishlist`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return getFav;
  }

  async function addToWishlist(productId, token) {
    const addToFav = await fetch(`${url}/wishlist/${productId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return addToFav;
  }

  async function removeFromWishlist(productId, token) {
    const wishlist = await fetch(`${url}/wishlist/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return wishlist;
  }

  async function decreaseItemQuantity(productId, token) {
    const decreaseItem = await fetch(`${url}/wishlist/product/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return decreaseItem;
  }

  async function getCart(token) {
    const cart = await fetch(`${url}/cart`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return cart;
  }

  async function addItemCart(productId, token) {
    const addedCart = await fetch(`${url}/cart/${productId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return addedCart;
  }

  async function updateCart(products, token) {
    const updatedCart = await fetch(`${url}/cart`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return updatedCart;
  }

  async function removeItemFromCart(productId, token) {
    const deletedCart = await fetch(`${url}/cart/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return deletedCart;
  }

  async function decreaseProductQuantity(productId, token) {
    const decreasedProduct = await fetch(`${url}/cart/product/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return decreasedProduct;
  }
  async function deleteCart(token) {
    const result = await fetch(`${url}/cart`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    return result;
  }

  /* PLACE AN ORDER */

  async function placeOrder(newOrderData, token) {
    const savedOrder = await fetch(`${url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(newOrderData),
    })
      .then((res) => res.json())
      .catch((err) => err);
    return savedOrder;
  }

    async function getOrders(token) {
      const orders = await fetch(`${url}/orders`, {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((err) => err);
      return orders;
    }

  // eslint-disable-next-line default-param-last
  async function getComments(id) {
    const comments = await fetch(`${url}/comments/product/${id}`, {
        method: "GET",
      })
      .then((res) => res.json())
      .catch((err) => err);
    return comments;
  }

  async function addComment(comment, token) {
    const comments = await fetch(`${url}/comments`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .catch((err) => err);

    return comments;
  }

  async function deleteComment(commentID, token) {
    const deletedCommentInfo = await fetch(`${url}/comments/${commentID}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);

    return deletedCommentInfo;
  }

  async function updateComment(commentID, newComment, token) {
    const updatedCommentInfo = await fetch(`${url}/comments/${commentID}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .catch((err) => err);

    return updatedCommentInfo;
  }

  return {
    registerUser,
    loginUser,
    getUser,
    updateUserData,
    changeUserPassword,
    getCategories,
    getPartners,
    getAllProducts,
    getProduct,
    getSlides,
    getFilters,
    getFiltersCategories,
    getFiltersCategoriesPrices,
    getFiltersPrices,
    getSearchedProducts,
    getFiltersPricesBySubcategory,
    getFiltersCategoriesPricesBySubcategory,
    getFiltersCategoriesBySubcategory,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    getCart,
    updateCart,
    deleteCart,
    removeItemFromCart,
    addItemCart,
    decreaseProductQuantity,
    placeOrder,
    getOrders,
    getComments,
    addComment,
    deleteComment,
    updateComment,
  };
}
