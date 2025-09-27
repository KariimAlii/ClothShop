import {useContext, use} from "react";
import {CartContext} from "../store/shopping-cart-context.jsx";

export default function Cart({ onUpdateItemQuantity }) {
    // You can optionally use use() Hook ✅ or useContext() Hook ✅

    // if(true) {
    //     // use() hook is more flexible , only available in React V.19
    //     // use() can be used inside if block , while you can't use useContext() this way
    //     const cartCtx = use(CartContext);  // ✅✅
    //     // const cartCtx = useContext(CartContext); // ❌❌
    // }

    const cartCtx = useContext(CartContext); // use(CartContext); ✅✅
    // you can destructure the cart context ==> const { items } = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
      {cartCtx.items.length > 0 && (
        <ul id="cart-items">
          {cartCtx.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
