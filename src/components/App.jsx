import { CartContextProvider } from "../util/CartContext";
import { UserProgressContextProvider } from "../util/UserProgessContext";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";
import Meals from "./Meals";

export default function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
