import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../util/CartContext";
import Button from "../util/Button";
import UserProgressContext from "../util/UserProgessContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberItems, item) => {
    return totalNumberItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="React Bite" />
        <h1>React Bite</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
