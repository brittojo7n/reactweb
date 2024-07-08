// src/components/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost/hstore/get_cart.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const response = await fetch('http://localhost/hstore/remove_from_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the item from the local state
      setCartItems(cartItems.filter(item => item.product_id !== productId));
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div key={item.product_id} className="col-md-4 mb-3">
              <div className="card">
                <img src={item.product_img} className="card-img-top" alt={item.product_name} 
                style={{ 
                        width: '300px', 
                        height: '300px', 
                        display: 'block' 
                        }} />
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.product_desc}</p>
                  <p className="card-text"><strong>Price:</strong> ${item.product_price}</p>
                  <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => handleRemove(item.product_id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
