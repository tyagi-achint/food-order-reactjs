import { useContext } from "react";
import { currencyFormat } from "../util/formatting";
import Button from "./Button";
import CartContext from "./CartContext";

export default function MealItem({ meal }) {
  const cartCntx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCntx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`https://reactbite-backend.onrender.com/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormat.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
