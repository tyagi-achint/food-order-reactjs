import { useContext } from "react";
import CartContext from "../util/CartContext";
import Modal from "./Modal";
import { currencyFormat } from "../util/formatting";
import Input from "../util/Input";
import Button from "../util/Button";
import UserProgressContext from "../util/UserProgessContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fData = new FormData(event.target);
    const customerData = Object.fromEntries(fData.entries());

    fetch("https://reactbite-backend.onrender.com/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormat.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="number" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button onClick={handleClose} type="button" textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
