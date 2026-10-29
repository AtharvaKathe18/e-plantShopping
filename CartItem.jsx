
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  // Calculate the total number of plants
  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate the total price of the cart
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    window.alert("Checkout Coming Soon!");
  };

  return (
    <main className="content-page cart-page">
      <section className="page-heading">
        <p className="eyebrow">YOUR GREEN COLLECTION</p>
        <h1>Shopping Cart</h1>
        <p>
          You have {totalItems} plant(s) in your cart.
        </p>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon">🪴</div>

          <h2>Your cart is waiting to bloom!</h2>

          <p>
            You haven't added any plants to your cart yet.
            Explore our collection and find your favorites.
          </p>

          <Link
            to="/plants"
            className="primary-button"
          >
            Continue Shopping
          </Link>
        </section>
      ) : (
        <>
          <section className="cart-list">
            {items.map((item) => (
              <article
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ${item.price.toFixed(2)}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    🗑 Remove Item
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section className="cart-summary">
            <h2>Order Summary</h2>

            <p>Total Items: {totalItems}</p>

            <p className="total-price">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <Link
              to="/plants"
              className="secondary-button"
            >
              Continue Shopping
            </Link>
          </section>
        </>
      )}
    </main>
  );
}
