// src/components/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost/hstore/fetch_cart.php')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.cart_id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>${item.product_price}</td>
                <td>${(item.product_price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
