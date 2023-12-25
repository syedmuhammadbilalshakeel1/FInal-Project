import NovaPoshtaForm from "../NovaPoshtaForm/NovaPoshtaForm";
import StorePickUpForm from "../StorePickUpForm/StorePickUpForm";

function DeliveryForm({ isNovaPoshtaDelivery, setIsNovaPoshtaDelivery }) {

  return (
    <div className="checkout-section__form-wrapper">
      <h1 className="checkout-section__form-title">Shipping Details</h1>
      <div className="checkout-section__form-select">
        <button
          className={
            isNovaPoshtaDelivery
              ? "checkout-section__form-select-btn checkout-section__form-select-btn--active"
              : "checkout-section__form-select-btn"
          }
          type="button"
          onClick={() => setIsNovaPoshtaDelivery(true)}
        >
          Delivery
        </button>
        <button
          className={
            isNovaPoshtaDelivery
              ? "checkout-section__form-select-btn"
              : "checkout-section__form-select-btn checkout-section__form-select-btn--active"
          }
          type="button"
          onClick={() => setIsNovaPoshtaDelivery(false)}
        >
          Store Pickup
        </button>
      </div>
      {isNovaPoshtaDelivery ? <NovaPoshtaForm /> : <StorePickUpForm />}
    </div>
  );
}

export default DeliveryForm;

