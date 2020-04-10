import React from 'react';

import './CartItem.css';

const CartItem = ({ title, quantity, cost }) => (

  <div className="Cart">
    <div>{title}</div>
    <div className="CartItem-details">
      <div className="CartItem-quantity">Qty: {quantity}</div>
      <div>${cost.toFixed(2)}</div>
    </div>
  </div>
)

export default CartItem