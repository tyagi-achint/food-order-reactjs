import { CartContextProvider } from "../util/CartContext";
import Header from "./Header";
import Meals from "./Meals";

export default function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}
