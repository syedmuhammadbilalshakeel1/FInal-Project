/* eslint-disable no-else-return */
/* eslint-disable object-curly-newline */
export default function createOrder({ customerId, products, deliveryAddress, email, mobile, delivery}) {
  if (customerId) {
    const order = {
      customerId,
      deliveryAddress,
      email,
      mobile,
      shipping: delivery ? "Nova Poshta delivery" : "Store pickup",
      letterSubject: "Thank You for your order!",
      letterHtml: delivery
        ? "<h1>Thank you for choosing Innovation Oasis</h1><p>Your order has been placed. It will be shipped as soon as possible. If you have any questions please <a href='https://final-project-mauve-seven.vercel.app/about'>contact us</a></p>"
        : "<h1>Thank you for choosing Innovation Oasis</h1><p>Your order has been placed. It will be waiting for you in our store. Reservation period is 3 days. If you have any questions please <a href='https://final-project-mauve-seven.vercel.app/about'>contact us</a></p>",
    };
    return order;
  } else {
    const order = {
      products,
      deliveryAddress,
      email,
      mobile,
      shipping: delivery ? "Nova Poshta delivery" : "Store pickup",
      letterSubject: "Thank You for your order!",
      letterHtml: delivery
        ? "<h1>Thank you for choosing Innovation Oasis</h1><p>Your order has been placed. It will be shipped as soon as possible. If you have any questions please <a href='https://final-project-mauve-seven.vercel.app/about'>contact us</a></p>"
        : "<h1>Thank you for choosing Innovation Oasis</h1><p>Your order has been placed. It will be waiting for you in our store. Reservation period is 3 days. If you have any questions please <a href='https://final-project-mauve-seven.vercel.app/about'>contact us</a></p>",
    };
    return order;
  }
}
