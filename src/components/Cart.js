// src/components/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost/hstore/get_cart.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCartItems(data);
        calculateTotalCost(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalCost = (items) => {
    const total = items.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
    setTotalCost(total);
  };

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
      const updatedCartItems = cartItems.filter(item => item.product_id !== productId);
      setCartItems(updatedCartItems);
      calculateTotalCost(updatedCartItems);
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return; // prevent negative quantities
    try {
      const response = await fetch('http://localhost/hstore/update_cart_quantity.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity: newQuantity }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedCartItems = cartItems.map(item =>
        item.product_id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCartItems);
      calculateTotalCost(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map(item => (
              <div key={item.product_id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={item.product_img} className="card-img-top" alt={item.product_name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.product_name}</h5>
                    <p className="card-text">{item.product_desc}</p>
                    <p className="card-text"><strong>Price:</strong> ${item.product_price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button 
                        className="btn btn-outline-secondary" 
                        onClick={() => updateQuantity(item.product_id, item.quantity - 1)} 
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary" 
                        onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="btn btn-danger mt-3" onClick={() => handleRemove(item.product_id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
