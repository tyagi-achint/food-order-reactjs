import { currencyFormat } from "../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIcrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormat.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIcrease}>+</button>
      </p>
    </li>
  );
}
