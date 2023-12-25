const notificationsSettings = {
  basic: {
    insert: "bottom",
    container: "bottom-left",
    dismiss: {
      duration: 5000,
      showIcon: true
    }
  },
  addedToCart: {
    title: "Success!",
    message: "Product added to cart",
    type: "success",
  },
  error: {
    title: "Error!",
    type: "danger",
  },
  addedToCompare: {
    title: "Success!",
    message: "Product added to compare list",
    type: "success",
  },
  errorCompare: {
    title: "Attn!",
    message: "The product removed from comparison list",
    type: "danger"
  },
  errorReAddToCart: {
    title: "Attn!",
    message: "The product is already in the cart",
    type: "danger"
  },
  cartIncreased: {
    title: "Success!",
    message: "Product quantity increased",
    type: "success",
  },
  cartNotIncreased: {
    title: "Attn!",
    message: "The product not increased",
    type: "danger"
  },
  cartDecreased: {
    title: "Success!",
    message: "Product quantity decreased",
    type: "success",
  },
  cartNotDecreased: {
    title: "Attn!",
    message: "The product not decreased",
    type: "danger"
  },
  cartQuantityChanged: {
    title: "Success!",
    message: "Product quantity changed",
    type: "success",
  },
  cartQuantityNotChanged: {
    title: "Attn!",
    message: "Product quantity didn't changed.The entered number is invalid ",
    type: "danger"
  },
  cartQuantityChangedOnSameValue: {
    title: "Attn!",
    message: "Product quantity didn't changed. Enter new value!",
    type: "danger"
  },
  cartDeleted: {
    title: "Success!",
    message: "Product deleted",
    type: "success",
  },
  cartNotDeleted: {
    title: "Atthn!",
    message: "Product didn't deleted",
    type: "danger"
  },
  productNotFound: {
    title: "Attn!",
    message: "Products with this price not found. Please, repeat with another price!",
    type: "danger"
  },
};

export default notificationsSettings;