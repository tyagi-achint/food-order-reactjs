import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../util/CartContext";
import Button from "../util/Button";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberItems, item) => {
    return totalNumberItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="React Bite" />
        <h1>React Bite</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
